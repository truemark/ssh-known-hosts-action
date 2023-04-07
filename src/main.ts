import * as core from '@actions/core'
import {loadConfig} from './config'
import * as path from 'path'
import * as fs from 'fs'
import {execaSync} from 'execa'

async function run(): Promise<void> {
  try {
    const config = loadConfig()
    const entries = []
    for (const scanHost of config.scanHosts) {
      const parts = scanHost.split(':')
      const host = parts[0]
      const port = parts.length === 1 ? '22' : parts[1]
      const result = execaSync('ssh-keyscan', ['-p', port, host])
      entries.push(...result.stdout.split('\n'))
    }
    entries.push(...config.entries)
    const sshDir = path.join(process.env['HOME'] ?? '', '.ssh')
    if (!fs.existsSync(sshDir)) {
      fs.mkdirSync(sshDir, {recursive: true})
      fs.chmodSync(sshDir, '700')
    }
    const knownHostsFile = path.join(sshDir, 'known_hosts')
    const stream = fs.createWriteStream(knownHostsFile, {flags: 'a', encoding: 'utf8'})
    stream.write(entries.join('\n'))
    stream.end('\n')
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
