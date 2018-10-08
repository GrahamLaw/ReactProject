import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dish: null
        }
    }


    // renderDish(dish) {
    //     if (this.props.dish != null)
    //         return(
    //             <div  className="col-12 col-md-5 m-1">
    //                 <Card>
    //                     <CardImg top src={dish.image} alt={dish.name} />
    //                     <CardBody>
    //                     <CardTitle>{dish.name}</CardTitle>
    //                     <CardText>{dish.description}</CardText>
    //                     </CardBody>
    //                 </Card>
    //             </div>
    //         );
    //     else
    //         return(
    //             <div></div>
    //         );
    // }

    render() {
        const dish = this.props.dish;

        return (
            <div className="container">
                <div className="row">
                    {dish}
                </div>
                {/* <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
                </div> */}
                {/* <DishDetail dish={this.state.selectedDish} /> */}
            </div>
        );
    }
}

export default DishDetail;