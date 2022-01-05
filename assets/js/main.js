
const calculadora = {
  
    tela: document.querySelector('#tela'),

    iniciar() {
        this.verificaBtn();
    },

    verificaBtn() {
        document.addEventListener('click', function(e) {
            const el = e.target;

            if(el.classList.contains('btn-eq')) {
                this.calcular();
            }
            
            if(el.classList.contains('btn-num')) {
                this.tela.value += el.innerText;
            }

            if(el.classList.contains('btn-del')) {
                this.btnDel();
            }

            if(el.classList.contains('btn-clear')) {
                this.clearTela();
            }
        }.bind(this));
    },

    calcular() {
        let conta = this.tela.value;

        
        try {
            conta = eval(conta);

            if(!conta) {
                throw new MediaError('Conta inválida!')
            }

            this.tela.value = conta;
        } catch (e) {
            alert('Conta inválida!');
            return;
        }
    },

    btnDel() {
        this.tela.value = this.tela.value.slice(0, -1);
    },

    clearTela() {
        this.tela.value = '';
    }

};
calculadora.iniciar();
// console.log()