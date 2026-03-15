const vocabulary = {
    noun: [
        {hanzi:"老师", pinyin:"lǎoshī", spanish:"Profesor/a"},
        {hanzi:"学生", pinyin:"xuéshēng", spanish:"Estudiante"},
        {hanzi:"名字", pinyin:"míngzi", spanish:"Nombre"},
        {hanzi:"人", pinyin:"rén", spanish:"Persona/gente"},
        {hanzi:"中国", pinyin:"Zhōngguó", spanish:"China"},
        {hanzi:"美国", pinyin:"Měiguó", spanish:"Estados Unidos"},
        {hanzi:"家", pinyin:"jiā", spanish:"Familia/casa"},
        {hanzi:"女儿", pinyin:"nü'ér", spanish:"Hija"},
        {hanzi:"儿子", pinyin:"érzi", spanish:"Hijo"},
        {hanzi:"妈妈", pinyin:"māma", spanish:"Madre/mamá"},
        {hanzi:"爸爸", pinyin:"bàba", spanish:"Padre/papá"},
        {hanzi:"同学", pinyin:"tóngxué", spanish:"Compañero/a"},
        {hanzi:"朋友", pinyin:"péngyou", spanish:"Amigo/a"},
        {hanzi:"医生", pinyin:"yīshēng", spanish:"Doctor"},
        {hanzi:"医院", pinyin:"yīyuàn", spanish:"Hospital"},
        {hanzi:"学校", pinyin:"xuéxiào", spanish:"Escuela"},
        {hanzi:"商店", pinyin:"shāngdiàn", spanish:"Tienda"},
        {hanzi:"饭店", pinyin:"fàndiàn", spanish:"Restaurante/Hotel"},
        {hanzi:"大学", pinyin:"dàxué", spanish:"Universidad"},
        {hanzi:"水", pinyin:"shuǐ", spanish:"Agua"},
        {hanzi:"茶", pinyin:"chá", spanish:"Té"},
        {hanzi:"米饭", pinyin:"mǐfàn", spanish:"Arroz cocido"},
        {hanzi:"菜", pinyin:"cài", spanish:"Plato/comida"},
        {hanzi:"水果", pinyin:"shuǐguǒ", spanish:"Fruta"},
        {hanzi:"苹果", pinyin:"píngguǒ", spanish:"Manzana"},
        {hanzi:"杯子", pinyin:"bēizi", spanish:"Taza/vaso"},
        {hanzi:"钱", pinyin:"qián", spanish:"Dinero"},
        {hanzi:"衣服", pinyin:"yīfu", spanish:"Ropa"},
        {hanzi:"书", pinyin:"shū", spanish:"Libro"},
        {hanzi:"汉字", pinyin:"Hànzi", spanish:"Carácter chino"},
        {hanzi:"桌子", pinyin:"zhuōzi", spanish:"Mesa"},
        {hanzi:"椅子", pinyin:"yǐzi", spanish:"Silla"},
        {hanzi:"电脑", pinyin:"diànnǎo", spanish:"Computadora"},
        {hanzi:"电视", pinyin:"diànshì", spanish:"Televisión"},
        {hanzi:"电影", pinyin:"diànyǐng", spanish:"Película"},
        {hanzi:"飞机", pinyin:"fēijī", spanish:"Avión"},
        {hanzi:"出租车", pinyin:"chūzūchē", spanish:"Taxi"},
        {hanzi:"车", pinyin:"chē", spanish:"Coche"},
        {hanzi:"猫", pinyin:"māo", spanish:"Gato"},
        {hanzi:"狗", pinyin:"gǒu", spanish:"Perro"},
        {hanzi:"今天", pinyin:"jīntiān", spanish:"Hoy"},
        {hanzi:"昨天", pinyin:"zuótiān", spanish:"Ayer"},
        {hanzi:"明天", pinyin:"míngtiān", spanish:"Mañana"},
        {hanzi:"上午", pinyin:"shàngwǔ", spanish:"Mañana (am)"},
        {hanzi:"中午", pinyin:"zhōngwǔ", spanish:"Mediodía"},
        {hanzi:"下午", pinyin:"xiàwǔ", spanish:"Tarde (pm)"},
        {hanzi:"现在", pinyin:"xiànzài", spanish:"Ahora"},
        {hanzi:"点", pinyin:"diǎn", spanish:"Hora/punto"},
        {hanzi:"分", pinyin:"fēn", spanish:"Minuto"},
        {hanzi:"分钟", pinyin:"fēnzhōng", spanish:"Minuto (unidad)"},
        {hanzi:"年", pinyin:"nián", spanish:"Año"},
        {hanzi:"月", pinyin:"yuè", spanish:"Mes"},
        {hanzi:"号", pinyin:"hào", spanish:"Día del mes"},
        {hanzi:"星期", pinyin:"xīngqī", spanish:"Semana"},
        {hanzi:"时候", pinyin:"shíhou", spanish:"Momento"},
        {hanzi:"身体", pinyin:"shēntǐ", spanish:"Cuerpo/salud"},
        {hanzi:"天气", pinyin:"tiānqì", spanish:"Clima"},
        {hanzi:"北京", pinyin:"Běijīng", spanish:"Pekín"},
        {hanzi:"汉语", pinyin:"Hànyǔ", spanish:"Chino (idioma)"}
    ],
    verb: [
        {hanzi:"谢谢", pinyin:"xièxie", spanish:"Gracias"},
        {hanzi:"再见", pinyin:"zàijiàn", spanish:"Adiós"},
        {hanzi:"叫", pinyin:"jiào", spanish:"Llamarse"},
        {hanzi:"是", pinyin:"shì", spanish:"Ser/estar"},
        {hanzi:"有", pinyin:"yǒu", spanish:"Tener/haber"},
        {hanzi:"看", pinyin:"kàn", spanish:"Mirar/ver/leer"},
        {hanzi:"听", pinyin:"tīng", spanish:"Escuchar"},
        {hanzi:"说话", pinyin:"shuōhuà", spanish:"Hablar"},
        {hanzi:"读", pinyin:"dú", spanish:"Leer"},
        {hanzi:"写", pinyin:"xiě", spanish:"Escribir"},
        {hanzi:"看见", pinyin:"kànjiàn", spanish:"Ver"},
        {hanzi:"学", pinyin:"xué", spanish:"Estudiar"},
        {hanzi:"学习", pinyin:"xuéxí", spanish:"Estudiar/aprender"},
        {hanzi:"工作", pinyin:"gōngzuò", spanish:"Trabajar"},
        {hanzi:"睡觉", pinyin:"shuìjiào", spanish:"Dormir"},
        {hanzi:"打电话", pinyin:"dǎ diànhuà", spanish:"Llamar por teléfono"},
        {hanzi:"做", pinyin:"zuò", spanish:"Hacer"},
        {hanzi:"买", pinyin:"mǎi", spanish:"Comprar"},
        {hanzi:"开", pinyin:"kāi", spanish:"Conducir/abrir"},
        {hanzi:"坐", pinyin:"zuò", spanish:"Sentarse"},
        {hanzi:"住", pinyin:"zhù", spanish:"Vivir/residir"},
        {hanzi:"来", pinyin:"lái", spanish:"Venir"},
        {hanzi:"回", pinyin:"huí", spanish:"Volver"},
        {hanzi:"回去", pinyin:"huíqù", spanish:"Regresar"},
        {hanzi:"去", pinyin:"qù", spanish:"Ir a"},
        {hanzi:"想", pinyin:"xiǎng", spanish:"Querer/desear"},
        {hanzi:"喜欢", pinyin:"xǐhuan", spanish:"Gustar"},
        {hanzi:"爱", pinyin:"ài", spanish:"Amar"},
        {hanzi:"吃", pinyin:"chī", spanish:"Comer"},
        {hanzi:"喝", pinyin:"hē", spanish:"Beber"},
        {hanzi:"会", pinyin:"huì", spanish:"Saber hacer"},
        {hanzi:"能", pinyin:"néng", spanish:"Poder"},
        {hanzi:"请", pinyin:"qǐng", spanish:"Por favor/invitar"},
        {hanzi:"问", pinyin:"wèn", spanish:"Preguntar"},
        {hanzi:"认识", pinyin:"rènshi", spanish:"Conocer"},
        {hanzi:"谢谢", pinyin:"xièxie", spanish:"Gracias"}
    ],
    adjective: [
        {hanzi:"好", pinyin:"hǎo", spanish:"Bueno/bien"},
        {hanzi:"大", pinyin:"dà", spanish:"Grande"},
        {hanzi:"小", pinyin:"xiǎo", spanish:"Pequeño"},
        {hanzi:"多", pinyin:"duō", spanish:"Mucho"},
        {hanzi:"少", pinyin:"shǎo", spanish:"Poco"},
        {hanzi:"冷", pinyin:"lěng", spanish:"Frío"},
        {hanzi:"热", pinyin:"rè", spanish:"Caliente"},
        {hanzi:"漂亮", pinyin:"piàoliang", spanish:"Bonito"},
        {hanzi:"高兴", pinyin:"gāoxìng", spanish:"Feliz"},
        {hanzi:"好吃", pinyin:"hǎochī", spanish:"Delicioso"}
    ],
    pronoun: [
        {hanzi:"我", pinyin:"wǒ", spanish:"Yo"},
        {hanzi:"你", pinyin:"nǐ", spanish:"Tú"},
        {hanzi:"您", pinyin:"nín", spanish:"Usted"},
        {hanzi:"他", pinyin:"tā", spanish:"Él"},
        {hanzi:"她", pinyin:"tā", spanish:"Ella"},
        {hanzi:"我们", pinyin:"wǒmen", spanish:"Nosotros"},
        {hanzi:"这", pinyin:"zhè", spanish:"Este"},
        {hanzi:"这儿", pinyin:"zhèr", spanish:"Aquí"},
        {hanzi:"那", pinyin:"nà", spanish:"Ese/aquel"},
        {hanzi:"那儿", pinyin:"nàr", spanish:"Allí"},
        {hanzi:"哪", pinyin:"nǎ", spanish:"Cuál"},
        {hanzi:"哪儿", pinyin:"nǎr", spanish:"Dónde"},
        {hanzi:"谁", pinyin:"shéi", spanish:"Quién"},
        {hanzi:"什么", pinyin:"shénme", spanish:"Qué"},
        {hanzi:"多少", pinyin:"duōshao", spanish:"Cuánto"},
        {hanzi:"几", pinyin:"jǐ", spanish:"Cuántos (<10)"},
        {hanzi:"怎么", pinyin:"zěnme", spanish:"Cómo"},
        {hanzi:"怎么样", pinyin:"zěnmeyàng", spanish:"Qué tal"}
    ],
    other: [
        {hanzi:"不", pinyin:"bù", spanish:"No"},
        {hanzi:"没", pinyin:"méi", spanish:"No (haber)"},
        {hanzi:"很", pinyin:"hěn", spanish:"Muy"},
        {hanzi:"太", pinyin:"tài", spanish:"Demasiado"},
        {hanzi:"都", pinyin:"dōu", spanish:"Todos"},
        {hanzi:"和", pinyin:"hé", spanish:"Y/con"},
        {hanzi:"在", pinyin:"zài", spanish:"Estar en/en"},
        {hanzi:"的", pinyin:"de", spanish:"Posesivo"},
        {hanzi:"了", pinyin:"le", spanish:"Partícula cambio"},
        {hanzi:"吗", pinyin:"ma", spanish:"¿? (pregunta)"},
        {hanzi:"呢", pinyin:"ne", spanish:"¿? (continuación)"},
        {hanzi:"吧", pinyin:"ba", spanish:"Sugerencia"},
        {hanzi:"个", pinyin:"gè", spanish:"Contador general"},
        {hanzi:"本", pinyin:"běn", spanish:"Contador libros"},
        {hanzi:"块", pinyin:"kuài", spanish:"Yuan (moneda)"},
        {hanzi:"一", pinyin:"yī", spanish:"Uno"},
        {hanzi:"二", pinyin:"èr", spanish:"Dos"},
        {hanzi:"三", pinyin:"sān", spanish:"Tres"},
        {hanzi:"四", pinyin:"sì", spanish:"Cuatro"},
        {hanzi:"五", pinyin:"wǔ", spanish:"Cinco"},
        {hanzi:"六", pinyin:"liù", spanish:"Seis"},
        {hanzi:"七", pinyin:"qī", spanish:"Siete"},
        {hanzi:"八", pinyin:"bā", spanish:"Ocho"},
        {hanzi:"九", pinyin:"jiǔ", spanish:"Nueve"},
        {hanzi:"十", pinyin:"shí", spanish:"Diez"}
    ]
};

let cards = [];
let currentCard = 0;

function hideAll() {
    document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
}

function showMain() {
    hideAll();
    document.getElementById("main-section").classList.add("active");
}

function showHSK1() {
    hideAll();
    document.getElementById("hsk1-section").classList.add("active");
}

function showComingSoon() {
    hideAll();
    document.getElementById("coming-section").classList.add("active");
}

function showFlashcards() {
    hideAll();
    document.getElementById("flashcards-section").classList.add("active");
    filterCategory("all");
}

function filterCategory(cat) {
    if (cat === "all") {
        cards = [
            ...vocabulary.noun,
            ...vocabulary.verb,
            ...vocabulary.adjective,
            ...vocabulary.pronoun,
            ...vocabulary.other
        ];
    } else {
        cards = vocabulary[cat];
    }
    currentCard = 0;
    showCard();
}

function showCard() {
    if (cards.length === 0) return;
    let card = cards[currentCard];
    document.getElementById("card-hanzi").textContent = card.hanzi;
    document.getElementById("card-pinyin").textContent = card.pinyin;
    document.getElementById("card-translation").textContent = card.spanish;
    document.querySelector(".flashcard").classList.remove("flipped");
}

function flipCard() {
    document.querySelector(".flashcard").classList.toggle("flipped");
}

function nextCard() {
    currentCard = (currentCard + 1) % cards.length;
    showCard();
}

function prevCard() {
    currentCard = (currentCard - 1 + cards.length) % cards.length;
    showCard();
}

document.addEventListener("DOMContentLoaded", () => {
    showMain();
});