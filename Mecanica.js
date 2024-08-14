//Esta função não permetira que o site atualize apoz o submit
const form = document.getElementById('form-Atividade');
const imgAprovado = '<img src="./imagens/aprovado.png" alt = "Emoji celebrando" />';
const imgReprovado = '<img src="./imagens/reprovado.png" alt = "Emoji decepcionado" />';
const Atividades=[];
const Notas=[];
const SpanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const SpanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const NotaMinima = parseFloat(prompt("Digite a nota minima:"));


let linhas ='';   
form.addEventListener('submit', function(e){ 
   e.preventDefault();

   adicionaLinha();
   atualizaTabela();
   atualizaMediaFinal();

})


//===================(//adiciona uma segunda linha de resultado, assim fazendo uma acresentação e não uma subistituição)=====
function adicionaLinha(){  
   const inputNomeDaAtividade = document.getElementById('nome-atividade');
   const inputNotaDaAtividade = document.getElementById('nota-atividade');

   if(Atividades.includes(inputNomeDaAtividade.value)){  //============(Mostra um alerta mostrando uma atividade repedida)===
   alert(`A atividade: ${inputNomeDaAtividade.value} ja foi inserida`);
   } else {    
      Atividades.push(inputNomeDaAtividade.value);
      Notas.push(parseFloat(inputNotaDaAtividade.value));
   
      let linha ='<tr>';
      linha += `<td>${inputNomeDaAtividade.value}</td>`;
      linha += `<td>${inputNotaDaAtividade.value}</td>`;
      linha += `<td>${inputNotaDaAtividade.value >= NotaMinima ? imgAprovado : imgReprovado}</td>`;
      linha += '</tr>';
      
      linhas += linha;
   }
//============================================================================================================================
                                                            // | //
                                                            // | //
                                                            // | //
                                                            // | //
                                                            // V //   
//==========================================(Atualiza os input ou area do nome da atividade ou nota.)========================

   
   inputNomeDaAtividade.value = '';
   inputNotaDaAtividade.value = '';

}
//===========================================================================================================================
                                                            // | //
                                                            // | //
                                                            // | //
                                                            // | //
                                                            // V //    
//===============================================(Ira atualizar a tabela)====================================================
function atualizaTabela(){
   const corpoTabela = document.querySelector('tbody');
   corpoTabela.innerHTML = linhas;
}
//============================================================================================================================
                                                            // | //
                                                            // | //
                                                            // | //
                                                            // | //
                                                            // V //                                                         
//========================================(Atualiza a media final e tambem calcula a media final)=============================
function atualizaMediaFinal(){
   const mediaFinal = calculaMediaFinal();

   document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
   document.getElementById('media-final-resultado').innerHTML = mediaFinal >= NotaMinima ? SpanAprovado : SpanReprovado ;
}
//============================================================================================================================
                                                            // | //
                                                            // | //
                                                            // | //
                                                            // | //
                                                            // V //   
//===================================================(Calcula a media final)==================================================
function calculaMediaFinal(){
   let SomaDasnotas = 0;

   for (let i= 0; i <Notas.length; i++){
      SomaDasnotas += Notas[i];
   }

   return SomaDasnotas / Notas.length;
}
//============================================================================================================================