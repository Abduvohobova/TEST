
alert("Quyidagi savollarimizga to'g'ri javob bering va sertifikatni qo'lga kiriting.");
let quests= [
    {
        quest: "Fizika faniga kim asos solgan?",
        variant: [`A. Arximed`, `B. Beruniy`, `C. Aristotel`, `D. Men`],
        javobi: `C`
    },
    {
        quest: "Fizika so'zining ma'nosi nima?",
        variant: [ `\nA. Ko'kat`, `B. Palon Piston`, `C. Tabiat`, `D. Qonuniyat`],                
        javobi: `C`
    },
    {
        quest: "Mexanika bo'limi nechta qismga bo'linadi?",
        variant: [ `\nA. 5`, `B. 3`, `C. 2`, `D. 4`],                
        javobi: `B`
    },
    {
        quest: `Dinamika qonunlarining asoschisi kim?`,
        variant: [`\nA. Nyuton`, `B. Albert Eynshteyn`, `C. Arximed`, `D. Galileo Galiley`],
        javobi: `A`
    },
    {
        quest: "Tezlanishni o'lchaydigan asbob nima?",
        variant: [`\nA. Spidometr`, `B. Termometr`, `C. Altimetr`, `D. Akselerometr`],                
        javobi: `D`
    },
    {
        quest: "Quyosh nimadan tashkil topgan?",
        variant: [ `\nA. Plazma`, `B. Chang va gaz`, `C. Lava`, `D. Magma`],
        javobi: `A`
    },
    {
        quest: "Bosim qanday asbobda o'lchanadi?",
        variant: [ `\nA. Termometr`, `B. Aktinometr`, `C. Vattmetr`, `D. Barometr`],
        javobi: `D`
    },
    {
        quest: "Atmosfera bosimini birinchi bo'lib kim o'lchagan?",
        variant: [ `\nA. Faradey`, `B. Torichelli`, `C. Galileo Galiley`, `D. Nyuton`],
        javobi: `B`
    },
    {
        quest: "Oyda erkin tushish tezlanishi yerdagiga nisbatan qanday farq qiladi?",
        variant: [ `\nA. Yerdagidan 6 marta katta`, `B. 5 marta katta`, `C. Yerdagi bilan bir xil`, `D. 6 marta kichik`],
        javobi: `D`
    },
    {
        quest: "Musbat zaryadli zarrachalar nima deb nomlanadi?",
        variant: [ `\nA. Elektron`, `B. Proton`, `C. Neytron`, `D. Molekula`],
        javobi: `B`
    },
]
let trueAnswers = 0;
for (let i = 0; i < quests.length; i++) {
    const userAnswer = prompt(quests[i].quest + `\nVariantlar: \n` + quests[i].variant.join(`\n`));
    if (userAnswer == `quit` || userAnswer == `exit`) {
        break;
    }
    if (userAnswer == `next`) {
        continue;
    }
    if (userAnswer == quests[i].javobi) {
        trueAnswers++;
    }
    else if (userAnswer == `` || userAnswer == null) {
        for (let l = 0; l < 10; l++) {
            // alert(`Variant belgilash shart!`);
            l=userAnswer;
            alert(l = prompt(quests[i].quest + `\n Variantlar: \n` + quests[i].variant.join(`\n`)));
        }
        alert(`Variant belgilash shart!`);
        for (let j = 0; j < 1; j++) {
            let userAnswer = prompt(quests[i].quest + `\n Variantlar: \n` + quests[i].variant.join(`\n`));
            if (userAnswer[0] == 'a' || userAnswer[0] == 'b'|| userAnswer[0] == 'c' || userAnswer[0] == 'd') {
                trueAnswers++;
                continue;
            }
            if (userAnswer[0] != 'a' || userAnswer[0] != 'b'|| userAnswer[0] != 'c' || userAnswer[0] != 'd') {
                alert("Ko'rsatilgan variantlardan kiriting!");
                
            } 
        }
        
    }
    
}
alert(`Siz ${quests.length} ta savoldan ${trueAnswers} tasiga to'g'ri javob berdingiz.`)
if (trueAnswers / quests.length >= 0.7) {
    let text = "Sertifikatni olish!";
    alert(`Congratulations!!! 🎉🎉🎉🥳🥳😇 Tabriklayman Siz 1-o'rindagi sertifikatni qo'lga kiritdingiz!!!`);
    alert(`Sertifikatingizni quyidagi havoladan olishingiz mumkin:\n ${("@Abduvohidovna")}`);
}
else if (trueAnswers / quests.length >= 0.5 && trueAnswers / quests.length < 0.7) {   
    let text = "Sertifikatni olish!"; 
    alert(`Congratulations!!! 🎉🥳 Tabriklayman Siz 2-o'rin sertifikatni qo'lga kiritdingiz!`);
    alert(`Sertifikatingizni quyidagi havoladan olishingiz mumkin:  ${("@Abduvohidovna")}`);
}
else {
    alert(`Tabriklamiman siz sertifikat ololmadingiz, iltimos yaxshilab tayyorlanib qayta urinib ko'ring! OKmiii???`);
}