import {get_gateway_url} from './src/utils'

export default {
    app: {
        gateway: get_gateway_url("https://cai-services-dot-beda-bootcamp.appspot.com/bot/df/gateway"), // <- enter your gateway URL here, the function is just a helper function for my hosted integration. You don't normally need it
        muted: false, // <- mute microphone at start
        start_suggestions: [], // <- array of suggestions, displayed at the start screen
        fallback_lang: 'en', // <- fallback language code, if history mode or network is unavailable,
        voice: 'native' // <- voice of Text-To-Speech; for reference, see: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice/voiceURI
    },
    i18n: {
        en: {
            welcomeTitle: "Welcome to",
            muteTitle: "Mute Toggle",
            inputTitle: "Type your message",
            sendTitle: "Send",
            microphoneTitle: "Voice Input"
        },
        id: {
            welcomeTitle: "Selamat datang ke",
            muteTitle: "Matikan peralih",
            inputTitle: "Ketik pesan anda",
            sendTitle: "Kirim",
            microphoneTitle: "Input suara"
        },
        my: {
            welcomeTitle: "Selamat datang ke",
            muteTitle: "Tolak togol",
            inputTitle: "Taip mesej anda",
            sendTitle: "Hantar",
            microphoneTitle: "Input suara"
        },
        ru: {
            welcomeTitle: "Добро пожаловать в",
            muteTitle: "Режим звука",
            inputTitle: "Введите ваше сообщение",
            sendTitle: "Отправить",
            microphoneTitle: "Голосовой ввод"
        },
        de: {
            welcomeTitle: "Wilkommen bei",
            muteTitle: "Stumm Modus",
            inputTitle: "Schreiben Sie ihre Nachricht",
            sendTitle: "Senden",
            microphoneTitle: "Spracheingabe"
        },
        fr: {
            welcomeTitle: "Bienvenue à",
            muteTitle: "Sound Mode",
            inputTitle: "Entrez votre message",
            sendTitle: "Envoyer",
            microphoneTitle: "Entrée vocale"
        }
    }
}
