import React from 'react'; 
class Welcome extends React.Component {
  constructor(props){
      super(props)
      this.state = {
        date: new Date(),
        test: '1'
      }
       setInterval(()=>{
        this.setState({
            date: new Date(),
            test: 'constructor'
        })
     },1000)

    console.log("我应经在 constructor 里将 props 和 state 初始化好了")
  }
  conponentWillMount(){
    this.setState({
              date: new Date(), // 更新 date
              test: 'componentWillMount'
            })
      console.log("运行到这里的话，说明马上就要运行 render 了~")
  }

  render(){

      console.log("嗯，这里是 render。")
      return (
          <div>
              <h1>Hello,{this.props.name}</h1>
              <h2>{this.state.date.toLocaleTimeString()}</h2>
          </div>
      )
  }
  componentDidMount(){
    this.setState({
              date: new Date(), // 更新 date
              test: 'componentDidMount'
            })
      console.log("已经挂在到页面里啦")
  }
  componentWillReceiveProps(){
      this.setState({
          date: new Date(),
          test: 'componentWillReceiveProps'
      })
  }
  shouldComponentUpdate(){
        // this.setState({
        //     date: new Date(),
        //     test: 'shouldComponentUpdate'
        // })
        return true
    }  
   componentWillUpdate(){
       
    }  
   componentDidUpdate(){
        
    }  
   componentWillUnmount(){
    console.log('要死了')

    }
}

export default Welcome 