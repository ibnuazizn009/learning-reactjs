import React, {Component, createContext} from "react";

// High Order Component
// Context API React for State Management
const rootContext = createContext();

// High Order Component for Provider
const Provider = rootContext.Provider;
const globalProvider = (Children) =>{ // State Less Component
    return(
        // StateFull Component
        class ParentProvider extends Component{

            state = {
                totalOrder: 0
            }
        
            dispatch = (action) => {
                switch (action.type) {
                    case 'counter/addOrder':
                        return this.setState({
                            totalOrder: this.state.totalOrder + 10
                        })
        
                    case 'counter/minusOrder':  
                        if (this.state.totalOrder > 0) {
                            return this.setState({
                                totalOrder: this.state.totalOrder - 10
                            })
                        }
          
                        return this.setState({
                            totalOrder: 0
                        })
                
                    default:
                        return this.state;
                }
            }

            render(){
                return(
                    <Provider value={
                        {
                            state: this.state,
                            dispatch: this.dispatch
                        }
                    }>
                        <Children {...this.props}/>
                    </Provider>
                )
            }
        }
    )
}

export default globalProvider;

// High Order Component for Consumer
const Consumer = rootContext.Consumer; 
export const globalConsumer = (Children) => { // State Less Component
    return(
        class PatrentConsumer extends Component{
            render(){
                return(
                    <Consumer>
                        {
                            value => {
                                return(
                                    <Children {...this.props} {...value}/>
                                )
                            }
                        }
                    </Consumer>
                )
            }
        }
    )
}