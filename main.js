/*
- Mau Yang No Enc? Beli Lah
- Harga Cuman 50k No Enc 100%
- Wa Gua : 0857-2749-2435
- Wa Bot : 0812-1562-6270
*/

'use strict'
const {
    default: makeWASocket,
    BufferJSON,
    initInMemoryKeyStore,
    DisconnectReason,
    AnyMessageContent,
    useSingleFileAuthState,
    makeInMemoryStore,
    delay,
    downloadContentFromMessage,
    jidDecode,
    generateForwardMessageContent,
    generateWAMessageFromContent,
    proto,
    prepareWAMessageMedia,
  } = require('@adiwajshing/baileys'),
  figlet = require('figlet'),
  fs = require('fs'),
  moment = require('moment'),
  chalk = require('chalk'),
  logg = require('pino'),
  clui = require('clui'),
  PhoneNumber = require('awesome-phonenumber'),
  { Spinner } = clui,
  {
    imageToWebp,
    videoToWebp,
    writeExifImg,
    writeExifVid,
  } = require('./lib/exif2'),
  { serialize, getBuffer, makeid } = require('./lib/myfunc'),
  { color, lexxyLog } = require('./lib/color'),
  { isSetWelcome, getTextSetWelcome } = require('./lib/data/setwelcome'),
  { isSetLeft, getTextSetLeft } = require('./lib/data/setleft')
let db_respon_list = JSON.parse(
    fs.readFileSync('./database/list-message.json')
  ),
  welcome = JSON.parse(fs.readFileSync('./database/welcome.json')),
  left = JSON.parse(fs.readFileSync('./database/left.json')),
  set_welcome_group = JSON.parse(
    fs.readFileSync('./database/set_welcome.json')
  ),
  set_left_db = JSON.parse(fs.readFileSync('./database/set_left.json')),
  set_proses = JSON.parse(fs.readFileSync('./database/set_proses.json')),
  set_done = JSON.parse(fs.readFileSync('./database/set_done.json')),
  set_open = JSON.parse(fs.readFileSync('./database/set_open.json')),
  set_close = JSON.parse(fs.readFileSync('./database/set_close.json')),
  opengc = JSON.parse(fs.readFileSync('./database/opengc.json'))
const time = moment(new Date()).format('HH:mm:ss DD/MM/YYYY')
let setting = JSON.parse(fs.readFileSync('./config.json')),
  session = './' + setting.sessionName + '.json'
const { state, saveState } = useSingleFileAuthState(session)
function title() {
  console.log(
    chalk.bold.blue(
      figlet.textSync('OCHOBOT', {
        font: 'Standard',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: false,
      })
    )
  )
  console.log(
    chalk.yellow(
      '\n' +
        chalk.red('[ STORE - BOT ]') +
        '\n\n' +
        chalk.italic.magenta('\u2022 Author') +
        ' : ' +
        chalk.white('DenaraBot') +
        '\n' +
        chalk.italic.magenta('\u2022 YouTube') +
        ' : ' +
        chalk.white('Denara Bot') +
        '\n' +
        chalk.italic.magenta('\u2022 Caption') +
        ' : ' +
        chalk.white('Rela Bergadang Demi Mencari Cuan:v') +
        '\n'
    )
  )
}
function nocache(_0x2c3124, _0x17c402 = () => {}) {
  console.log('Done Wellcome Owner, Bot Sudah Aktif \u2705')
  fs.watchFile(require.resolve(_0x2c3124), async () => {
    await uncache(require.resolve(_0x2c3124))
    _0x17c402(_0x2c3124)
  })
}
function uncache(_0x481cdd = '.') {
  return new Promise((_0x10d1a7, _0x462a70) => {
    try {
      delete require.cache[require.resolve(_0x481cdd)]
      _0x10d1a7()
    } catch (_0x33e026) {
      _0x462a70(_0x33e026)
    }
  })
}
const status = new Spinner(chalk.cyan(' Booting WhatsApp Bot')),
  starting = new Spinner(chalk.cyan(' Preparing After Connect')),
  reconnect = new Spinner(chalk.redBright(' Reconnecting WhatsApp Bot')),
  store = makeInMemoryStore({
    logger: logg().child({
      level: 'fatal',
      stream: 'store',
    }),
  }),
  connectToWhatsApp = async () => {
    const _0x5e3844 = makeWASocket({
      printQRInTerminal: true,
      logger: logg({ level: 'fatal' }),
      auth: state,
      browser: ['ochobot Multi Device', 'Safari', '3.0'],
    })
    return (
      title(),
      store.bind(_0x5e3844.ev),
      (_0x5e3844.mode = 'public'),
      require('./index'),
      require('./help'),
      nocache('./index', (_0x33ccb4) =>
        console.log(
          chalk.redBright('[ CMD ]  ') +
            time +
            chalk.yellowBright(' "' + _0x33ccb4 + '" Update!')
        )
      ),
      nocache('./help', (_0xe60f0b) =>
        console.log(
          chalk.redBright('[ CMD ]  ') +
            time +
            chalk.yellowBright(' "' + _0xe60f0b + '" Update!')
        )
      ),
      (_0x5e3844.multi = true),
      (_0x5e3844.nopref = false),
      (_0x5e3844.prefa = 'anjing'),
      _0x5e3844.ev.on('messages.upsert', async (_0x3b2772) => {
        var _0x416776 = _0x3b2772.messages[0]
        if (!_0x3b2772.messages) {
          return
        }
        if (_0x416776.key && _0x416776.key.remoteJid == 'status@broadcast') {
          return
        }
        _0x416776 = serialize(_0x5e3844, _0x416776)
        _0x416776.isBaileys =
          _0x416776.key.id.startsWith('BAE5') ||
          _0x416776.key.id.startsWith('3EB0')
        require('./index')(
          _0x5e3844,
          _0x416776,
          _0x3b2772,
          setting,
          store,
          welcome,
          left,
          set_welcome_group,
          set_left_db,
          db_respon_list,
          set_proses,
          opengc,
          set_done,
          set_open,
          set_close
        )
      }),
      _0x5e3844.ev.on('presence.update', async (_0x4320ff) => {
        if (_0x4320ff.presences) {
          for (let _0x1cf30f in _0x4320ff.presences) {
            if (
              _0x4320ff.presences[_0x1cf30f].lastKnownPresence ===
                'composing' ||
              _0x4320ff.presences[_0x1cf30f].lastKnownPresence === 'recording'
            ) {
            }
          }
        }
      }),
      _0x5e3844.ev.on('connection.update', (_0x786e5d) => {
        const { connection: _0x37f91b, lastDisconnect: _0x1f46bb } = _0x786e5d
        _0x37f91b === 'close' &&
          (status.stop(),
          reconnect.stop(),
          starting.stop(),
          console.log(lexxyLog('Connect, Welcome Owner')),
          _0x1f46bb.error?.output?.statusCode !== DisconnectReason.loggedOut
            ? connectToWhatsApp()
            : console.log(lexxyLog('Connection Lost')))
      }),
      _0x5e3844.ev.on('group-participants.update', async (_0x28df8b) => {
        const _0x2313e2 = welcome.includes(_0x28df8b.id) ? true : false,
          _0x5f4e57 = left.includes(_0x28df8b.id) ? true : false,
          _0x4ba115 = await _0x5e3844.groupMetadata(_0x28df8b.id),
          _0x3658c6 = _0x4ba115.subject,
          _0x3cc7c3 = _0x4ba115.desc,
          _0x347426 = _0x4ba115.participants.length
        try {
          for (let _0x513ffe of _0x28df8b.participants) {
            if (_0x28df8b.action == 'add' && _0x2313e2) {
              try {
                var _0x5c4445 = await _0x5e3844.profilePictureUrl(
                  _0x513ffe,
                  'image'
                )
              } catch {
                var _0x5c4445 =
                  'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
              }
              if (isSetWelcome(_0x28df8b.id, set_welcome_group)) {
                var _0x18e0dc = getTextSetWelcome(
                    _0x28df8b.id,
                    set_welcome_group
                  ),
                  _0x51fb90 = _0x18e0dc.replace(
                    /@user/gi,
                    '@' + _0x513ffe.split('@')[0]
                  ),
                  _0x36048d = _0x51fb90
                    .replace(/@group/gi, _0x3658c6)
                    .replace(/@desc/gi, _0x3cc7c3)
                _0x5e3844.sendMessage(_0x28df8b.id, {
                  caption: '' + _0x36048d,
                  image: await getBuffer(_0x5c4445),
                  mentions: [_0x513ffe],
                })
              } else {
                _0x5e3844.sendMessage(_0x28df8b.id, {
                  caption:
                    'Welcome @' +
                    _0x513ffe.split('@')[0] +
                    ' in the group ' +
                    _0x3658c6,
                  image: await getBuffer(_0x5c4445),
                  mentions: [_0x513ffe],
                })
              }
            } else {
              if (_0x28df8b.action == 'remove' && _0x5f4e57) {
                try {
                  var _0x5c4445 = await _0x5e3844.profilePictureUrl(
                    _0x513ffe,
                    'image'
                  )
                } catch {
                  var _0x5c4445 =
                    'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
                if (isSetLeft(_0x28df8b.id, set_left_db)) {
                  var _0x1e3033 = getTextSetLeft(_0x28df8b.id, set_left_db),
                    _0x51fb90 = _0x1e3033.replace(
                      /@user/gi,
                      '@' + _0x513ffe.split('@')[0]
                    ),
                    _0x36048d = _0x51fb90
                      .replace(/@group/gi, _0x3658c6)
                      .replace(/@desc/gi, _0x3cc7c3)
                  _0x5e3844.sendMessage(_0x28df8b.id, {
                    caption: '' + _0x36048d,
                    image: await getBuffer(_0x5c4445),
                    mentions: [_0x513ffe],
                  })
                } else {
                  _0x5e3844.sendMessage(_0x28df8b.id, {
                    caption: 'Sayonara @' + _0x513ffe.split('@')[0],
                    image: await getBuffer(_0x5c4445),
                    mentions: [_0x513ffe],
                  })
                }
              }
            }
          }
        } catch (_0x1a7a46) {
          console.log(_0x1a7a46)
        }
      }),
      _0x5e3844.ev.on('messages.delete', (_0x533aa9) => {
        if ('all' in _0x533aa9) {
          const _0x31375f = messages[_0x533aa9.jid]
          _0x31375f === null || _0x31375f === void 0
            ? void 0
            : _0x31375f.clear()
        } else {
          const _0x5c6b71 = _0x533aa9.keys[0].remoteJid,
            _0x2994ac = messages[_0x5c6b71]
          if (_0x2994ac) {
            const _0x258e1c = new Set(
              _0x533aa9.keys.map((_0x5c37a3) => _0x5c37a3.id)
            )
            _0x2994ac.filter((_0x327cd9) => !_0x258e1c.has(_0x327cd9.key.id))
          }
        }
      }),
      _0x5e3844.ev.on('chats.delete', (_0x361007) => {
        for (const _0xea803c of _0x361007) {
          chats.deleteById(_0xea803c)
        }
      }),
      setInterval(async function () {
        var _0x3e24f6 = new Date().toLocaleTimeString('en-US', {
            timeZone: 'Asia/Jakarta',
          }),
          _0x1960b8 = _0x3e24f6.split(':')[0] < 10 ? '0' + _0x3e24f6 : _0x3e24f6
        if (_0x1960b8 === '12:00:00 AM') {
          var _0x26b569 = (
              await _0x5e3844.groupMetadata('120363025081486209@g.us')
            ).subject,
            _0x1a2452 = _0x26b569.replace(/[^0-9]/gi, '')
          _0x5e3844.groupUpdateSubject(
            '120363025081486209@g.us',
            _0x26b569.replace(_0x1a2452, _0x1a2452 - 1)
          )
        }
      }, 1000),
      setInterval(() => {
        for (let _0x2d103e of Object.values(opengc)) {
          Date.now() >= _0x2d103e.time &&
            (_0x5e3844
              .groupSettingUpdate(_0x2d103e.id, 'not_announcement')
              .then((_0x12a3bb) =>
                _0x5e3844.sendMessage(_0x2d103e.id, {
                  text: 'Sukses, group telah dibuka',
                })
              )
              .catch((_0x70baea) =>
                _0x5e3844.sendMessage(_0x2d103e.id, { text: 'Error' })
              ),
            delete opengc[_0x2d103e.id],
            fs.writeFileSync('./database/opengc.json', JSON.stringify(opengc)))
        }
      }, 1000),
      _0x5e3844.ev.on('creds.update', () => saveState),
      (_0x5e3844.reply = (_0x2e24c1, _0xf9de39, _0x4adee2) =>
        _0x5e3844.sendMessage(
          _0x2e24c1,
          { text: _0xf9de39 },
          { quoted: _0x4adee2 }
        )),
      _0x5e3844.ws.on('CB:call', async (_0x4b3f28) => {
        const _0x49528e = _0x4b3f28.content[0].attrs['call-creator']
        _0x5e3844.sendMessage(_0x49528e, { text: 'Jangan telepon bot!' })
      }),
      (_0x5e3844.decodeJid = (_0x1516aa) => {
        if (!_0x1516aa) {
          return _0x1516aa
        }
        if (/:\d+@/gi.test(_0x1516aa)) {
          let _0xc6a2d3 = jidDecode(_0x1516aa) || {}
          return (
            (_0xc6a2d3.user &&
              _0xc6a2d3.server &&
              _0xc6a2d3.user + '@' + _0xc6a2d3.server) ||
            _0x1516aa
          )
        } else {
          return _0x1516aa
        }
      }),
      _0x5e3844.ev.on('contacts.update', (_0x4bfe52) => {
        for (let _0x2e5b46 of _0x4bfe52) {
          let _0x4b6055 = _0x5e3844.decodeJid(_0x2e5b46.id)
          if (store && store.contacts) {
            store.contacts[_0x4b6055] = {
              id: _0x4b6055,
              name: _0x2e5b46.notify,
            }
          }
        }
      }),
      (_0x5e3844.getName = (_0x3d2818, _0x38cd35 = false) => {
        var _0x514bd3 = _0x5e3844.decodeJid(_0x3d2818)
        _0x38cd35 = _0x5e3844.withoutContact || _0x38cd35
        let _0x27d1c9
        if (_0x514bd3.endsWith('@g.us')) {
          return new Promise(async (_0x5c0973) => {
            _0x27d1c9 = store.contacts[_0x514bd3] || {}
            if (!(_0x27d1c9.name || _0x27d1c9.subject)) {
              _0x27d1c9 = _0x5e3844.groupMetadata(_0x514bd3) || {}
            }
            _0x5c0973(
              _0x27d1c9.name ||
                _0x27d1c9.subject ||
                PhoneNumber(
                  '+' + _0x514bd3.replace('@s.whatsapp.net', '')
                ).getNumber('international')
            )
          })
        } else {
          _0x27d1c9 =
            _0x514bd3 === '0@s.whatsapp.net'
              ? {
                  id: _0x514bd3,
                  name: 'WhatsApp',
                }
              : _0x514bd3 === _0x5e3844.decodeJid(_0x5e3844.user.id)
              ? _0x5e3844.user
              : store.contacts[_0x514bd3] || {}
        }
        return (
          (_0x38cd35 ? '' : _0x27d1c9.name) ||
          _0x27d1c9.subject ||
          _0x27d1c9.verifiedName ||
          PhoneNumber('+' + _0x3d2818.replace('@s.whatsapp.net', '')).getNumber(
            'international'
          )
        )
      }),
      (_0x5e3844.setStatus = (_0x1f8c5f) => {
        return (
          _0x5e3844.query({
            tag: 'iq',
            attrs: {
              to: '@s.whatsapp.net',
              type: 'set',
              xmlns: 'status',
            },
            content: [
              {
                tag: 'status',
                attrs: {},
                content: Buffer.from(_0x1f8c5f, 'utf-8'),
              },
            ],
          }),
          _0x1f8c5f
        )
      }),
      (_0x5e3844.sendContact = async (
        _0x3e2dc1,
        _0xf9c6a2,
        _0x3d1a71 = '',
        _0x2587f5 = {}
      ) => {
        let _0x53c29d = []
        for (let _0x470b1c of _0xf9c6a2) {
          _0x53c29d.push({
            lisplayName: await _0x5e3844.getName(_0x470b1c + '@s.whatsapp.net'),
            vcard:
              'BEGIN:VCARD\nVERSION:3.0\nN:' +
              (await _0x5e3844.getName(_0x470b1c + '@s.whatsapp.net')) +
              '\nFN:' +
              (await _0x5e3844.getName(_0x470b1c + '@s.whatsapp.net')) +
              '\nitem1.TEL;waid=' +
              _0x470b1c +
              ':' +
              _0x470b1c +
              '\nitem1.X-ABLabel:Ponsel\nEND:VCARD',
          })
        }
        return _0x5e3844.sendMessage(
          _0x3e2dc1,
          {
            contacts: {
              displayName: _0x53c29d.length + ' Contacts',
              contacts: _0x53c29d,
            },
            ..._0x2587f5,
          },
          { quoted: _0x3d1a71 }
        )
      }),
      (_0x5e3844.copyNForward = async (
        _0x5c833b,
        _0xd09e22,
        _0x23c13c = false,
        _0x1f1a2e = {}
      ) => {
        let _0x236917
        _0x1f1a2e.readViewOnce &&
          ((_0xd09e22.message =
            _0xd09e22.message &&
            _0xd09e22.message.ephemeralMessage &&
            _0xd09e22.message.ephemeralMessage.message
              ? _0xd09e22.message.ephemeralMessage.message
              : _0xd09e22.message || undefined),
          (_0x236917 = Object.keys(
            _0xd09e22.message.viewOnceMessage.message
          )[0]),
          delete (_0xd09e22.message && _0xd09e22.message.ignore
            ? _0xd09e22.message.ignore
            : _0xd09e22.message || undefined),
          delete _0xd09e22.message.viewOnceMessage.message[_0x236917].viewOnce,
          (_0xd09e22.message = {
            ..._0xd09e22.message.viewOnceMessage.message,
          }))
        let _0x5727b9 = Object.keys(_0xd09e22.message)[0],
          _0x90c43f = await generateForwardMessageContent(_0xd09e22, _0x23c13c),
          _0x574cb8 = Object.keys(_0x90c43f)[0],
          _0x2c42b4 = {}
        if (_0x5727b9 != 'conversation') {
          _0x2c42b4 = _0xd09e22.message[_0x5727b9].contextInfo
        }
        _0x90c43f[_0x574cb8].contextInfo = {
          ..._0x2c42b4,
          ..._0x90c43f[_0x574cb8].contextInfo,
        }
        const _0x107654 = await generateWAMessageFromContent(
          _0x5c833b,
          _0x90c43f,
          _0x1f1a2e
            ? {
                ..._0x90c43f[_0x574cb8],
                ..._0x1f1a2e,
                ...(_0x1f1a2e.contextInfo
                  ? {
                      contextInfo: {
                        ..._0x90c43f[_0x574cb8].contextInfo,
                        ..._0x1f1a2e.contextInfo,
                      },
                    }
                  : {}),
              }
            : {}
        )
        return (
          await _0x5e3844.relayMessage(_0x5c833b, _0x107654.message, {
            messageId: _0x107654.key.id,
          }),
          _0x107654
        )
      }),
      (_0x5e3844.sendMessageFromContent = async (
        _0x493058,
        _0xd981ff,
        _0x16106f = {}
      ) => {
        var _0x55d87e = {
            contextInfo: {},
            ..._0x16106f,
          },
          _0x43c1e9 = await generateWAMessageFromContent(
            _0x493058,
            _0xd981ff,
            _0x55d87e
          )
        return (
          await _0x5e3844.relayMessage(_0x493058, _0x43c1e9.message, {
            messageId: _0x43c1e9.key.id,
          }),
          _0x43c1e9
        )
      }),
      (_0x5e3844.downloadAndSaveMediaMessage = async (
        _0xd460db,
        _0x40340d,
        _0x28e840
      ) => {
        if (_0x40340d === 'image') {
          var _0x4fe040 = await downloadContentFromMessage(
            _0xd460db.message.imageMessage ||
              _0xd460db.message.extendedTextMessage?.contextInfo.quotedMessage
                .imageMessage,
            'image'
          )
          let _0x237b38 = Buffer.from([])
          for await (const _0x195521 of _0x4fe040) {
            _0x237b38 = Buffer.concat([_0x237b38, _0x195521])
          }
          return fs.writeFileSync(_0x28e840, _0x237b38), _0x28e840
        } else {
          if (_0x40340d === 'video') {
            var _0x4fe040 = await downloadContentFromMessage(
              _0xd460db.message.videoMessage ||
                _0xd460db.message.extendedTextMessage?.contextInfo.quotedMessage
                  .videoMessage,
              'video'
            )
            let _0x15085f = Buffer.from([])
            for await (const _0x1108f1 of _0x4fe040) {
              _0x15085f = Buffer.concat([_0x15085f, _0x1108f1])
            }
            return fs.writeFileSync(_0x28e840, _0x15085f), _0x28e840
          } else {
            if (_0x40340d === 'sticker') {
              var _0x4fe040 = await downloadContentFromMessage(
                _0xd460db.message.stickerMessage ||
                  _0xd460db.message.extendedTextMessage?.contextInfo
                    .quotedMessage.stickerMessage,
                'sticker'
              )
              let _0x31cc1b = Buffer.from([])
              for await (const _0x47e861 of _0x4fe040) {
                _0x31cc1b = Buffer.concat([_0x31cc1b, _0x47e861])
              }
              return fs.writeFileSync(_0x28e840, _0x31cc1b), _0x28e840
            } else {
              if (_0x40340d === 'audio') {
                var _0x4fe040 = await downloadContentFromMessage(
                  _0xd460db.message.audioMessage ||
                    _0xd460db.message.extendedTextMessage?.contextInfo
                      .quotedMessage.audioMessage,
                  'audio'
                )
                let _0x37ab8b = Buffer.from([])
                for await (const _0x51aa2d of _0x4fe040) {
                  _0x37ab8b = Buffer.concat([_0x37ab8b, _0x51aa2d])
                }
                return fs.writeFileSync(_0x28e840, _0x37ab8b), _0x28e840
              }
            }
          }
        }
      }),
      (_0x5e3844.sendImageAsSticker = async (
        _0x54a97d,
        _0x5b0f92,
        _0x543096,
        _0x1e5533 = {}
      ) => {
        let _0x35dfdc = Buffer.isBuffer(_0x5b0f92)
            ? _0x5b0f92
            : /^data:.*?\/.*?;base64,/i.test(_0x5b0f92)
            ? Buffer.from(_0x5b0f92.split`,`[1], 'base64')
            : /^https?:\/\//.test(_0x5b0f92)
            ? await await getBuffer(_0x5b0f92)
            : fs.existsSync(_0x5b0f92)
            ? fs.readFileSync(_0x5b0f92)
            : Buffer.alloc(0),
          _0x410443
        return (
          _0x1e5533 && (_0x1e5533.packname || _0x1e5533.author)
            ? (_0x410443 = await writeExifImg(_0x35dfdc, _0x1e5533))
            : (_0x410443 = await imageToWebp(_0x35dfdc)),
          await _0x5e3844.sendMessage(
            _0x54a97d,
            {
              sticker: { url: _0x410443 },
              ..._0x1e5533,
            },
            { quoted: _0x543096 }
          ),
          _0x410443
        )
      }),
      (_0x5e3844.sendVideoAsSticker = async (
        _0x222d90,
        _0x43c9bc,
        _0x3cbaae,
        _0x135312 = {}
      ) => {
        let _0xbb6869 = Buffer.isBuffer(_0x43c9bc)
            ? _0x43c9bc
            : /^data:.*?\/.*?;base64,/i.test(_0x43c9bc)
            ? Buffer.from(_0x43c9bc.split`,`[1], 'base64')
            : /^https?:\/\//.test(_0x43c9bc)
            ? await await getBuffer(_0x43c9bc)
            : fs.existsSync(_0x43c9bc)
            ? fs.readFileSync(_0x43c9bc)
            : Buffer.alloc(0),
          _0x11e628
        return (
          _0x135312 && (_0x135312.packname || _0x135312.author)
            ? (_0x11e628 = await writeExifVid(_0xbb6869, _0x135312))
            : (_0x11e628 = await videoToWebp(_0xbb6869)),
          await _0x5e3844.sendMessage(
            _0x222d90,
            {
              sticker: { url: _0x11e628 },
              ..._0x135312,
            },
            { quoted: _0x3cbaae }
          ),
          _0x11e628
        )
      }),
      _0x5e3844
    )
  }
connectToWhatsApp().catch((_0x42a173) => console.log(_0x42a173))
