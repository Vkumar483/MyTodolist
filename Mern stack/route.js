const mongoose=require('mongoose')
const {mongourl}=require('./config/keys')
const Wish=mongoose.model('wishes')

mongoose.connect(mongourl)


module.exports = (app, path) => {
    // app.get('/', (req, res) => {
    //     Wish.find({}).then((data)=>{
    //         //console.log(data)
    //         res.render('home',{data:data})
    //     }).catch(err=>{
    //         console.log(err)
    //     })
    // })

    app.get('/data', (req, res) => {
        Wish.find({}).then((data)=>{
            res.send(data)
            //console.log(data)
            //res.render('home',{data:data})
        }).catch(err=>{
            console.log(err)
        })
    })

    app.get('/about', (req, res) => {
        res.render('about')
    })

    
    app.post('/sent',(req,res)=>{

        const Item=new Wish({
            wish:req.body.item
        })
        Item.save().then(data=>{
          console.log('Saved')
          res.send(data)
        }).catch(err=>{
            throw err
        })
        
        // console.log(req.body.item)
        // data.push(req.body.item)
        // res.send(data);


    })

    app.delete('/remove/:id',(req,res)=>{


        //for react
        Wish.findOneAndDelete({_id:req.params.id}).then(data=>{
                console.log('deleted')
                res.send(data)
            })

        //for ejs

        // Wish.findOneAndDelete({wish:req.params.id}).then(data=>{
        //     console.log('deleted')
        //     res.send({hello :'man'})
        // })

        //for normal 

        // const newData=data.filter((dat)=>{
        //     return dat!=req.params.id
        // })
        // data=newData
        // console.log('ara h ',req.params.id)
    })

    // app.all('*', (req, res) => {
    //     res.status(404).send('Error')
    // })
}