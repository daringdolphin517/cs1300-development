import React, { Component } from 'react';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Grade, GradeOutlined } from '@mui/icons-material';

class Item extends Component {

    render() {
        return (
            <Card style={{ backgroundColor: '#D3D3D3'}}>
                <CardMedia
                    component="img"
                    image={require('./assets/' + this.props.idx + '.png')}
                />
                <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
                    <CardContent>
                        <Typography variant="h4">{this.props.name}</Typography>
                        <Typography variant="h6">{this.props.description}</Typography>
                        <Typography style={{ marginRight: 10 }}>
                            Price: ${this.props.price}
                        </Typography>
                        <Typography>
                            Type: {this.props.Types.map((type) => <span>{type} </span>)}
                        </Typography>
                        <Typography>
                            Color: {this.props.Color}
                        </Typography>
                        {this.props.Other.length === 0 ? (
                            <Button
                                style={{ backgroundColor: "#4682B4" }}
                                variant="contained"
                                color="primary"
                                startIcon={<GradeOutlined />}
                                onClick={() => this.props.saveItem(this.props.idx)}>
                                Add to Saved Items
                            </Button>
                        ) : (
                            <Button
                                style={{ backgroundColor: "#FBC02D" }}
                                variant="contained"
                                color="secondary"
                                startIcon={<Grade />}
                                onClick={() => this.props.saveItem(this.props.idx)}>
                                Remove from Saved Items
                            </Button>
                        )}
                    </CardContent>
                </div>
            </Card>
        );
    }
}

export default Item;