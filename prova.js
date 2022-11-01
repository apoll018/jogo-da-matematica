 
function gerarNumero() {
    
        /*soma*/
           
            document.getElementById("soma1").value = numerosoma1;
            document.getElementById("soma2").value = numerosoma2;
            document.getElementById("soma3").value = numerosoma3;
            document.getElementById("soma4").value = numerosoma4;
            
        /*subtração*/
        
            
            document.getElementById("sub1").value = numerosub1;
            document.getElementById("sub2").value = numerosub2;
            document.getElementById("sub3").value = numerosub3;
            document.getElementById("sub4").value = numerosub4;
            
        /*multiplicação*/
            
            
            document.getElementById("mult1").value = numeromult1;
            document.getElementById("mult2").value = numeromult2;
            document.getElementById("mult3").value = numeromult3;
            document.getElementById("mult4").value = numeromult4;
        
        }

            var numerosoma1 = Math.floor(Math.random() * 10) + 1;
            var numerosoma2 = Math.floor(Math.random() * 10) + 1;
            var numerosoma3 = Math.floor(Math.random() * 10) + 1;
            var numerosoma4 = Math.floor(Math.random() * 10) + 1;
            
            var numerosub1 = Math.floor(Math.random() * 10) + 1;
            var numerosub2 = Math.floor(Math.random() * 10) + 1;
            var numerosub3 = Math.floor(Math.random() * 10) + 1;
            var numerosub4 = Math.floor(Math.random() * 10) + 1;
            
            var numeromult1 = Math.floor(Math.random() * 10) + 1;
            var numeromult2 = Math.floor(Math.random() * 10) + 1;
            var numeromult3 = Math.floor(Math.random() * 10) + 1;
            var numeromult4 = Math.floor(Math.random() * 10) + 1;
            
            var resultadosoma1 = numerosoma1 + numerosoma2
            var resultadosoma2 = numerosoma3 + numerosoma4;
            
            var resultadosub1 = numerosub1 - numerosub2;
            var resultadosub2 = numerosub3 - numerosub4;
            
            var resultadomult1 = numeromult1 * numeromult2;
            var resultadomult2 = numeromult3 * numeromult4;
            
            var operacaosoma1 = "";
            var operacaosoma2 = "";
            var operacaosub1 = "";
            var operacaosub2 = "";
            var operacaomult1 = "";
            var operacaomult2 = "";
            

            function capturar(){
                operacaosoma1 = document.getElementById('respostasoma1').value;
                operacaosoma2 = document.getElementById('respostasoma2').value;
                operacaosub1 = document.getElementById('respostasub1').value;
                operacaosub2 = document.getElementById('respostasub2').value;
                operacaomult1 = document.getElementById('respostamult1').value;
                operacaomult2 = document.getElementById('respostamult2').value;
                
                console.log (operacaosoma1);
                console.log (operacaosoma2);
                console.log (operacaosub1);
                console.log (operacaosub2);
                console.log (operacaomult1);
                console.log (operacaomult2);
                
               
                verifica();
                
            } 
            
                var acertosoma1 = 0;
                var acertosoma2 = 0;
                var errosoma1 = 0;
                var errosoma2 = 0;
                
                var acertosub1 = 0;
                var acertosub2 = 0;
                var errosub1 = 0;
                var errosub2 = 0;
                
                var acertomult1 = 0;
                var acertomult2 = 0;
                var erromult1 = 0;
                var erromult2 = 0;
                
                var resultadoacertos = 0;
                var resultadoerros = 0;
                
            function verifica(){
                
                if(operacaosoma1 == resultadosoma1){
                        var cor = document.getElementById('respostasoma1');
                        cor.style.color = "Green";
                        acertosoma1++;
                       
                       }
                        else{
                        var cor = document.getElementById('respostasoma1');
                        cor.style.color = "Red";
                        errosoma1++;
                        
                        }
                
                if(operacaosoma2 == resultadosoma2){
                        var cor = document.getElementById('respostasoma2');
                        cor.style.color = "Green";
                        acertosoma2++;
                       }
                        
                        else{
                        var cor = document.getElementById('respostasoma2');
                        cor.style.color = "Red";
                        errosoma2++;
                        
                        }
                        
                
                if(operacaosub1 == resultadosub1){
                        var cor = document.getElementById('respostasub1');
                        cor.style.color = "Green";
                        acertosub1++;
                        
                       }
                        
                        else{
                        var cor = document.getElementById('respostasub1');
                        cor.style.color = "Red";
                        errosub2++;
                        }
                        
                if(operacaosub2 == resultadosub2){
                        var cor = document.getElementById('respostasub2');
                        cor.style.color = "Green";
                        acertosub2++;
                        
                       }
                        
                        else{
                        var cor = document.getElementById('respostasub2');
                        cor.style.color = "Red";
                        errosub2++;
                        
                        }
                        
                if(operacaomult1 == resultadomult1){
                        var cor = document.getElementById('respostamult1');
                        cor.style.color = "Green";
                        acertomult1++;
                        
                       }
                        
                        else{
                        var cor = document.getElementById('respostamult1');
                        cor.style.color = "Red";
                        erromult1++;
                        
                        }
                        
                if(operacaomult2 == resultadomult2){
                        var cor = document.getElementById('respostamult2');
                        cor.style.color = "Green";
                        acertomult2++;
                        
                       }
                        
                        else{
                        var cor = document.getElementById('respostamult2');
                        cor.style.color = "Red";
                        erromult2++;
                        
                        }
                
                        resultadoacertos = acertosoma1 + acertosoma2 + acertosub1 + acertosub2 + acertomult1 + acertomult2;
                        resultadoerros = errosoma1 + errosoma2 + errosub1 + errosub2 + erromult1 + erromult2;
                    	alert ("Você acertou " + resultadoacertos + " e errou " + resultadoerros);
					 
                       
            }

