const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const { color } = require('./lib/color')
const {_wait, getBuffer, h2k, generateMessageID, banner, getGroupAdmins, getRandom, start, success, author, close } = require('./lib/functions');
const { Miminnya, SesionName, ownerNumber} = require('./setting.json')
require('./zeebot.js')
const moment = require("moment-timezone")
nocache('./zeebot.js', module => console.log(`${module} Im Coming 4you❤️`))
const _gombal = JSON.parse(fs.readFileSync('./lib/data/gombal.json'));
const _welkom = JSON.parse(fs.readFileSync('./lib/data/welcome.json'))
const gombal = _gombal[Math.floor(Math.random() * _gombal.length)]
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
          if(time2 < "23:59:00"){
          var ucapanWaktu = 'GoodNigh'
}
          if(time2 < "19:00:00"){
          var ucapanWaktu = 'GooodEvening'
}
          if(time2 < "18:00:00"){
          var ucapanWaktu = 'GoodEvening'
}
          if(time2 < "15:00:00"){
          var ucapanWaktu = 'GoodAfternoon'
}
          if(time2 < "11:00:00"){
          var ucapanWaktu = 'GoodMoorning'
}
          if(time2 < "05:00:00"){
          var ucapanWaktu = 'GoodNight'
}
           
const starts = async (zee = new WAConnection()) => {
function _0x25ba(_0x5d4fc7,_0x2d0a07){var _0x53f27a=_0x53f2();return _0x25ba=function(_0x25ba8c,_0x3e1d1e){_0x25ba8c=_0x25ba8c-0xcb;var _0x1d108a=_0x53f27a[_0x25ba8c];return _0x1d108a;},_0x25ba(_0x5d4fc7,_0x2d0a07);}function _0x53f2(){var _0x451b46=['lime','red','2114490SsFBrN','×××××××××××××××××××××××××××××××××××','•\x20Febzabotz','77VmFzsr','\x1b[1;31m×\x1b[1;37m>','warn','3653976fYhnvj','5NtsmNq','52787fAIZNg','cyan','log','•\x20Febriansyah','logger','yellow','377383DbkXLt','|\x1b[1;32mシ︎\x1b[1;37m|','314036HCIzdq','#Subscribe\x20YouTube','1571328diWJMN','#Follow\x20Instagram','Hallo','3mPrjZS','547972HEyCKn','648whjQsN'];_0x53f2=function(){return _0x451b46;};return _0x53f2();}var _0x3a7231=_0x25ba;(function(_0x39b45d,_0xb6e8b7){var _0x2d14cc=_0x25ba,_0x336d11=_0x39b45d();while(!![]){try{var _0x3bb9e8=parseInt(_0x2d14cc(0xcb))/0x1+parseInt(_0x2d14cc(0xcd))/0x2*(parseInt(_0x2d14cc(0xd2))/0x3)+-parseInt(_0x2d14cc(0xd3))/0x4*(parseInt(_0x2d14cc(0xde))/0x5)+parseInt(_0x2d14cc(0xdd))/0x6+-parseInt(_0x2d14cc(0xdf))/0x7*(-parseInt(_0x2d14cc(0xd4))/0x8)+parseInt(_0x2d14cc(0xcf))/0x9+parseInt(_0x2d14cc(0xd7))/0xa*(-parseInt(_0x2d14cc(0xda))/0xb);if(_0x3bb9e8===_0xb6e8b7)break;else _0x336d11['push'](_0x336d11['shift']());}catch(_0x51f16b){_0x336d11['push'](_0x336d11['shift']());}}}(_0x53f2,0x4c17a),zee[_0x3a7231(0xe3)]['level']=_0x3a7231(0xdc),console[_0x3a7231(0xe1)](banner),console['log'](color(_0x3a7231(0xd8),_0x3a7231(0xe0))),console['log'](_0x3a7231(0xdb),_0x3a7231(0xcc),color(_0x3a7231(0xd1)),'Owner',color(''+Miminnya)),console['log'](color(_0x3a7231(0xd8),_0x3a7231(0xe0))),console[_0x3a7231(0xe1)](color('#SC\x20Ini\x20di\x20susun\x20oleh',_0x3a7231(0xd6))),console[_0x3a7231(0xe1)](color(_0x3a7231(0xe2),_0x3a7231(0xe4))),console['log'](color('×××××××××××××××××××××××××××××××××××',_0x3a7231(0xe0))),console[_0x3a7231(0xe1)](color(_0x3a7231(0xce),_0x3a7231(0xd6))),console[_0x3a7231(0xe1)](color('•\x20Febzabotz','yellow')),console[_0x3a7231(0xe1)](color(_0x3a7231(0xd8),_0x3a7231(0xe0))),console['log'](color(_0x3a7231(0xd0),'red')),console[_0x3a7231(0xe1)](color(_0x3a7231(0xd9),_0x3a7231(0xe4))),console[_0x3a7231(0xe1)](color('×××××××××××××××××××××××××××××××××××','cyan')),console[_0x3a7231(0xe1)](color('#Be\x20Smart\x20People','cyan')),console['log'](color('#Tiada\x20Kata\x20Menyerah\x20Sebelum\x20Mencoba',_0x3a7231(0xd5))),console['log'](color(_0x3a7231(0xd8),_0x3a7231(0xe0))));      
 
    zee.version = [2, 2143, 3]
    zee.browserDescription = [ 'ZeeBotz', 'Safari', '3.5' ]
    zee.on('qr', () => {
    console.log(color('[','white'), color('!','cyan'), color(']','white'), color('Scan Ngab, gk scan gk jadi'))
    })
    fs.existsSync(`./${SesionName}.json`) && zee.loadAuthInfo(`./${SesionName}.json`)
    zee.on('connecting', () => {    
    start('2','⚔️')
    })
    zee.on('open', () => {
    success('2', 'Dah Connect Tuhh!!')
    start('','')
    })
    await zee.connect({timeoutMs: 30*1000})
    fs.writeFileSync(`./${SesionName}.json`, JSON.stringify(zee.base64EncodedAuthInfo(), null, '\t'))
    
    zee.on('chat-update', async (message) => {
    require('./zeebot.js')(zee, message, _welkom)
    })
    
	zee.on('group-participants-update', async (anu) => {
	  const isWelkom = _welkom.includes(anu.jid)
	  
		try {
			    mem = anu.participants[0]
			    console.log(anu)
                try {
               pic = await zee.getProfilePicture(mem)
                } catch (e) {
                pic = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            try {
                pp_grup = await zee.getProfilePicture(anu.jid)
                } catch (e) {
                pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
             }
                  
            if (anu.action == 'add' && mem.includes(zee.user.jid)) {
            zee.sendMessage(anu.jid, 'Halo! Terima Kasih sudah Mengundangku, Jika ingin Menggunakan Bot, Tolong Jadikan Admin Ya, Ketik .menu', 'conversation')
            }


            if (!isWelkom) return
             if (anu.action == 'add' && !mem.includes(zee.user.jid)) {     
                mdata = await zee.groupMetadata(anu.jid)
                memeg = mdata.participants.length                 
            	num = anu.participants[0]
                groupName = mdata.subject
                let v = zee.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
              teks = `Selamat Datang Kak *@${mem.split('@')[0]}*\n*Welcome in group *${groupName}*\n*Nomor :* ${mem.replace('@s.whatsapp.net', '')}\nSilahkan Baca Rules Groupnya Kak\n\n*Semoga betah~~*`
              buff = await getBuffer(pic)
              zee.sendMessage(mdata.id, { contentText: `${teks}`, footerText: `Welcome Message By *Pebri*`, buttons: [{buttonId: `.selamatdatang`,buttonText:{displayText: 'WELCOME KAK'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')
		}
		
		if (!isWelkom) return
            if (anu.action == 'remove' && !mem.includes(zee.user.jid)) {
                mdata = await zee.groupMetadata(anu.jid)
            	num = anu.participants[0]
                let w = zee.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                memeg = mdata.participants.length
                out = `Selamat Tinggal Kak @${num.split('@')[0]} Semoga Jasamu Tidak Tenang!`
               buff = await getBuffer(pic)
               zee.sendMessage(mdata.id, { contentText: `${out}`, footerText: `Left Message By *Pebri*`, buttons: [{buttonId: `.bay`,buttonText:{displayText: 'BYE KAK👋'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')
            }
			} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
     
       })
       }
	
       
       
/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('[ ! ]', `${module}`, 'Di Pantau Oleh Kang Bakso!')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
