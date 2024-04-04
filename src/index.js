import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/teste', function(req,res){
    res.send('OK!')
})

app.listen(3001, function () {
    console.log('Servidor rodando na porta 3001');
}
)