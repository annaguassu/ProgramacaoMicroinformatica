<!DOCTYPE html>
<html lang="pt-br">
<head>
                <title>Ex. 16-03</title>
</head>
<body>
                <form id="form"> 

                    <input id="nome" type="text" placeholder="Digite seu nome:">

                    <input id="genero" type="text" placeholder="Informe seu genero">
<br> <br>
                 <button type="submit">Submit</button> 
                </form> 

                <div id="login"></div>
                <script>


                            function onSubmit(event){
      event.preventDefault()


                                if (genero.value === 'Masculino'){
                login.innerHTML = <p style="color:pink"> ${nome.value}? Então é homem? Bacana. </p>
            } else if (genero.value === 'Feminino'){
                login.innerHTML = <p style="color:purple">Tá se achando bonita né?, ${nome.value}? Parabéns, porque você é mesmo. lindíssima, gata, deusa grega  </p>
            } else {login.innerHTML = ``}
        }
        form.addEventListener('submit', onSubmit)

                </script>
</body>
</html>
