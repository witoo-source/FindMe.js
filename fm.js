#!/usr/bin/env node
import chalk from 'chalk';
import figlet from 'figlet';
figlet('Find Me!', (err, data) => {
    if(!err) {
        console.log(chalk.blue(data))
    }
})
console.log(chalk.grey.bold('=> Code by Wito 🦊'))
const ip = process.argv[2];
const token = process.argv[3];
const ipApi = `https://ipinfo.io/${ip}?token=${token}`;
const ipLog = await fetch(ipApi);
const ipJson = await ipLog.json();
if (ip.startsWith('192.168')) {
    console.log(chalk.red('ERROR! Solo IPs Publicas'))
} else {
    console.log(chalk.green('Proceso exitoso! Tu Info:'));
    console.log('--------------------')
    console.log(ipJson);
}