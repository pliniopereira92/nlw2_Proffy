const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async (db) => {
    // inserir dados
    proffyValue = {
        name: "Plínio Pereira",
        avatar:"https://media-exp1.licdn.com/dms/image/C4E35AQEjs4Ai0VahqA/profile-framedphoto-shrink_200_200/0?e=1596834000&v=beta&t=tRFQ2n4aPHX2gZsv_ctgKclfD1dGD5PjEyeTTjYqAJU" , 
        whatsapp: "81999457192", 
        bio: "Entusiasta das melhores jogadas de CS:GO.<br><br>Apaixonado por da HS na cabeça e por bangar com flash bang. Mais de 200.000 pessoas já levaram meus HS na cabeça.", 
    }

    classValue = {
        subject: 1, 
        cost: "20", 
        //o proffy_id virá pelo banco de dados
    }

    classScheduleValues = [
        //class_id virá pelo banco de dados, após cadastramos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consultar os dados inseridos

    // todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)
    
    // consultar as classes de um determinado professor
    // e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys)

    // o hórario que a pessoa trabalha, por exemplo, é das 8h - 18h
    // o hórario do time_from(8h) precisa ser menor ou igual ao hórario solicitado
    // o time_to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)

    console.log(selectClassesSchedules)

})