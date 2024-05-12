document.addEventListener('DOMContentLoaded', function(){
    var rotinas = {
        segunda: {
            manha: ["Acordar", "Tomar os remédios", "Colocar a roupa", "Comer", "Escovar os dentes", "Pentear o cabelo", "Ir para a escola", "Almoçar"],
            tarde: ["Escovar os dentes", "Tempo livre", "Estudar", "Tomar banho", "Comer", "Escovar os dentes"],
            noite: ["Programar/Estudar", "Jantar", "Escovar os dentes", "Jogar genshin", "Tempo livre", "Dormir"]
        },
        terca: {
            manha: ["Acordar", "Tomar os remédios", "Colocar a roupa", "Comer", "Escovar os dentes", "Pentear o cabelo", "Ir para a escola", "Almoçar"],
            tarde: ["Escovar os dentes", "Ir para a psicóloga", "Tempo livre", "Tomar banho", "Comer", "Escovar os dentes"],
            noite: ["Programar/Estudar", "Jantar", "Escovar os dentes", "Jogar genshin", "Tempo livre", "Dormir"]
        }, 
        quarta: {
            manha: ["Acordar", "Tomar os remédios", "Colocar a roupa", "Comer", "Escovar os dentes", "Pentear o cabelo", "Ir para a escola", "Almoçar"],
            tarde: ["Escovar os dentes", "Ir para a robótica", "Tempo livre", "Tomar banho", "Comer", "Escovar os dentes"],
            noite: ["Programar/Estudar", "Jantar", "Escovar os dentes", "Jogar genshin", "Tempo livre", "Dormir"]
        },
        quinta: {
            manha: ["Acordar", "Tomar os remédios", "Colocar a roupa", "Comer", "Escovar os dentes", "Pentear o cabelo", "Ir para a escola", "Almoçar"],
            tarde: ["Escovar os dentes", "Tempo livre", "Estudar", "Tomar banho", "Comer", "Escovar os dentes"],
            noite: ["Programar/Estudar", "Jantar", "Escovar os dentes", "Jogar genshin", "Tempo livre", "Dormir"]
        },
        sexta: {
            manha: ["Acordar", "Tomar os remédios", "Colocar a roupa", "Comer", "Escovar os dentes", "Pentear o cabelo", "Ir para a escola", "Almoçar"],
            tarde: ["Escovar os dentes", "Tempo livre", "Estudar", "Tomar banho", "Comer", "Escovar os dentes"],
            noite: ["Programar/Estudar", "Jantar", "Escovar os dentes", "Jogar genshin", "Tempo livre", "Dormir"]
        },
        sabado: {
            manha: ["Acordar", "Almoçar"],
            tarde: ["Escovar os dentes","Arrumar o quarto", "Tomar banho", "Comer", "Escovar os dentes"],
            noite: ["Tempo livre", "Jantar", "Escovar os dentes", "Jogar genshin", "Tempo livre", "Dormir"]
        },
        domingo: {
            manha: ["Acordar", "Almoçar"],
            tarde: ["Escovar os dentes","Arrumar o quarto", "Tomar banho e lavar o cabelo", "Comer", "Escovar os dentes"],
            noite: ["Tempo livre", "Jantar", "Escovar os dentes", "Jogar genshin", "Tempo livre", "Dormir"]
        }
    }
    
    document.getElementById('diaSemana').addEventListener('change', function(){
        var diaSelecionado = this.value;
        var rotinaTarde = '';
        var rotinaNoite = '';
        let rotinaHTML = '';

        if (rotinas.hasOwnProperty(diaSelecionado)) {
            ['manha', 'tarde', 'noite'].forEach(periodo => {
                rotinaHTML += `<section class="periodo">
                                    <h2>${periodo.charAt(0).toUpperCase() + periodo.slice(1)}</h2>
                                    <ul class="atividade">`;
                rotinas[diaSelecionado][periodo].forEach(atividade => {
                    rotinaHTML += `<li><input type="checkbox">${atividade}</li>`;
                });
                rotinaHTML += `</ul></section>`;
            });
        } else {
            rotinaHTML = 'Selecione um dia da semana';
        }

        document.getElementById('rotina').innerHTML = rotinaHTML;
    })
})