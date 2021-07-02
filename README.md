# init-stp-fn
Aprendiendo Step Functions

- Problema 
- Step
- Lambda
- Permisos



##Problema
  - > 1. Registro del incidente de plagio
  - > 2. Programación de un examen. Los estudiantes tienen una semana para       completar la prueba.
  - > 3. Envíe al alumno una notificación por correo electrónico para informarle del requisito.
  - > 4. El proceso espera a que el estudiante complete el examen, luego
  - > 5. Determinar si el estudiante ha superado el examen o no (note >= 3)


## Step Function .json [here](http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)


## Lambda [here](http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)


## Permisos
  ### step to lambda
  
    > {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "",
            "Effect": "Allow",
            "Action": "lambda:InvokeFunction",
            "Resource": "arn:aws:lambda:us-east-2:·········:function:step-function-···-lambda:$LATEST"
        }
    ]
}
  
  ### api to step 
  
    > {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "states:*",
            "Resource": "*"
        }
    ]
}
  
