import React from "react";

class Home extends React.Component {
    state = {
        text: '',
        mywishes:[{_id:1,wish:'loading'}]
    }

    handleDelete(id){
        //console.log('Deleting')
        fetch('./remove/'+id,{
            method:'delete'
        })
        .then(res=>res.json())
        .then(res2=>{
            console.log(res2)
            const newwishes=this.state.mywishes.filter((item)=>{
                return item._id!==res2._id;
            })
            this.setState({
                mywishes:newwishes
            })
        })
        .catch(err=>console.log(err))
    }
    componentDidMount(){
        fetch('/data')
        .then(res=>res.json())
        .then(res2=>{
            //console.log(res2)
            this.setState({
                mywishes:res2
            })
        })
        .catch(err=>console.log(err))
    }
    handleSubmit(e) {
        e.preventDefault();
        // const url = "http://localhost:5000/sent";
        //we don`t hardcode value on production level

        var data = new URLSearchParams();
        //console.log(e.target)
        for (const pair of new FormData(e.target)) {
            // console.log(pair)
            data.append(pair[0], pair[1])
        }

        //localhost:3000/sent  -By default in order it go on 5000 we set poroxy in package.json
        fetch('/sent', {
            method: "post",
            body: data,

        }).then(res => res.json())
            .then(res2 => {
                console.log(res2)
                this.setState({
                    text: '',
                    mywishes:[...this.state.mywishes,res2]
                })
            });

    }
    render() {
        const list=this.state.mywishes.map(item=>{
            return <a className="collection-item" key ={item._id} onClick={()=>this.handleDelete(item._id)}>{item.wish}</a>
        })
        return (
            <>
                <form onSubmit={(e) => this.handleSubmit(e)} >
                    <input type="text"
                        name="item"
                        value={this.state.text}
                        onChange={(e) => this.setState({ text: e.target.value })} />
                    <button type="submit" className="waves-effect waves-light btn">Add</button>
                </form>

                <div className="collection">
                  {list}
                </div>
            </>
        )
    }
}

export default Home