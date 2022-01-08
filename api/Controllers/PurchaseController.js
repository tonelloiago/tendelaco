
class TotalAmount {

    constructor() {
        this.pista = 40,
        this.vip = 60,
        this.backstage = 80,
        this.frontstage = 75
    }

    calculateTicketsPrice(toCalculate) {

        let total = 0;
        total += this.vip * toCalculate.vip;
        total += this.pista * toCalculate.pista;
        total += this.backstage * toCalculate.backstage;
        total += this.frontstage * toCalculate.frontstage;

        return total;

    }

}


const PurchaseController = {

    
    async purchase(req, res) {

        const reqArgs = req.body;
        const totalPurchase = new TotalAmount();

        try {

            const toCalculate = {
                pista: reqArgs.pista,
                vip: reqArgs.vip,
                backstage: reqArgs.backstage,
                frontstage: reqArgs.frontstage,
            }

            const totalToPay = totalPurchase.calculateTicketsPrice(toCalculate);

            res.status(200).json({ toPay: totalToPay })

        }catch(error) {
            res.status(400).send({message: "tchau"})
        }

    }

}

module.exports = PurchaseController;