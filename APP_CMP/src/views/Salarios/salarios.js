const selectElement = document.getElementById('Sueldos');

const json = { 
    "Salario_Doc_Invest" : [
        { 
            "Instructor" : 
            { 
                "Exclusiva" : 320.25, 
                "Tiempo_Completo" : 271.40,
                "Medio_Tiempo" : 135.70,
                "T_Convencional_hora" : 3.39
            }, 
            "Asistente" : 
            { 
                "Exclusiva" : 361.88, 
                "Tiempo_Completo" : 306.68,
                "Medio_Tiempo" : 153.34,
                "T_Convencional_hora" : 3.83
            },
            "Agregado" : 
            { 
                "Exclusiva" : 408.93, 
                "Tiempo_Completo" : 346.55,
                "Medio_Tiempo" : 173.28,
                "T_Convencional_hora" : 4.33
            },
            "Asociado" : 
            { 
                "Exclusiva" : 462.09, 
                "Tiempo_Completo" : 391.60,
                "Medio_Tiempo" : 195.80,
                "T_Convencional_hora" : 4.90
            },
            "Titular" : 
            { 
                "Exclusiva" : 522.16, 
                "Tiempo_Completo" : 442.51,
                "Medio_Tiempo" : 221.25,
                "T_Convencional_hora" : 5.53
            } 
        }
    ],
    "Salario_T_Conv" : [
        { 
            "Horas_2" : 
            { 
                "Instructor" : 13.57, 
                "Asistente" : 15.33,
                "Agregado" : 17.32,
                "Asociado" : 19.58,
                "Titular" : 22.13
            },
            "Horas_3" :
            { 
                "Instructor" : 13.57, 
                "Asistente" : 15.33,
                "Agregado" : 17.32,
                "Asociado" : 19.58,
                "Titular" : 22.13
            },
            "Horas_4" :
            { 
                "Instructor" : 13.57, 
                "Asistente" : 15.33,
                "Agregado" : 17.32,
                "Asociado" : 19.58,
                "Titular" : 22.13
            },
            "Horas_5" :
            { 
                "Instructor" : 13.57, 
                "Asistente" : 15.33,
                "Agregado" : 17.32,
                "Asociado" : 19.58,
                "Titular" : 22.13
            },
            "Horas_6" :
            { 
                "Instructor" : 13.57, 
                "Asistente" : 15.33,
                "Agregado" : 17.32,
                "Asociado" : 19.58,
                "Titular" : 22.13
            },
            "Horas_7" :
            { 
                "Instructor" : 13.57, 
                "Asistente" : 15.33,
                "Agregado" : 17.32,
                "Asociado" : 19.58,
                "Titular" : 22.13
            },
            "Horas_8" :
            { 
                "Instructor" : 13.57, 
                "Asistente" : 15.33,
                "Agregado" : 17.32,
                "Asociado" : 19.58,
                "Titular" : 22.13
            },
            "Horas_9" :
            { 
                "Instructor" : 13.57, 
                "Asistente" : 15.33,
                "Agregado" : 17.32,
                "Asociado" : 19.58,
                "Titular" : 22.13
            },
            "Horas_10" :
            { 
                "Instructor" : 13.57, 
                "Asistente" : 15.33,
                "Agregado" : 17.32,
                "Asociado" : 19.58,
                "Titular" : 22.13
            },
            "Horas_11" :
            { 
                "Instructor" : 13.57, 
                "Asistente" : 15.33,
                "Agregado" : 17.32,
                "Asociado" : 19.581,
                "Titular" : 22.13
            },
            "Horas_12" :
            { 
                "Instructor" : 13.57, 
                "Asistente" : 15.33,
                "Agregado" : 17.32,
                "Asociado" : 19.58,
                "Titular" : 22.13
            }
        }
    ],
    "Salario_T_Conv_2" : [
        {
            "T_C_75" :
            {
                "Instructor" : 203.55, 
                "Asistente" : 230.01,
                "Agregado" : 259.91,
                "Asociado" : 293.70,
                "Titular" : 331.88  
            },
            "M_T_Horas_2" : 
            { 
                "Instructor": 162.84, 
                "Asistente" : 184.01,
                "Agregado" : 207.94,
                "Asociado" : 234.96,
                "Titular" : 266 
            },
            "M_T_Horas_3" : 
            { 
                "Instructor": 176.41, 
                "Asistente" : 199.34,
                "Agregado" : 225.26,
                "Asociado" : 254.54,
                "Titular" : 288  
            }
            
        } 
    ],

    "Aux_Docentes" : [
        {
            "Categoria_I" :
            {
                "Bachiller_Equival":
                {
                    "Tiempo_Completo": 184.81,
                    "Medio_Tiempo": 92.41,
                    "T_Conv_horas": 2.31
                }
                
            },
            "Categoria_II" :
            {
                "TSU":
                {
                    "Tiempo_Completo": 218.23,
                    "Medio_Tiempo": 109.12,
                    "T_Conv_horas": 3.73
                }
                
            },
            "Categoria_III" :
            {
                "Lic_Equivalente":
                {
                    "Tiempo_Completo": 271.40,
                    "Medio_Tiempo": 135.70,
                    "T_Conv_horas": 3.39
                }
                
            }
        }
    ]
}

const opciones = Object.keys(json);

opciones.forEach(opcion => {
    const elementosOption = document.createElement('option');
    elementosOption.value = opcion;
    selectElement.appendChild(elementosOption);
})