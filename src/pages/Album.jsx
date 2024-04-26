import AlbumStyle from '../styles/Album';

import React from 'react';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default function Album() {
  return (
    <CardGroup>
      <AlbumStyle>
        <Card>
          <Card.Img variant="top"
            src={require("./chicomoedas.jpg")}
            style={{ maxWidth: 315 }} />
          <Card.Body>
            <Card.Title>Chico Coins</Card.Title>
            <Card.Text>
              O maior ídolo da nação brasileira!!
            </Card.Text>
          </Card.Body>
        </Card>


        <Card>
          <Card.Img variant="top"
            src={require("./chicomoedas3.jpg")}
            style={{ maxWidth: 310 }} />
          <Card.Body>
            <Card.Title>Chico Coins</Card.Title>
            <Card.Text>
              O maior ídolo da nação brasileira!!
            </Card.Text>
          </Card.Body>
        </Card>


        <Card>
          <Card.Img variant="top"
            src={require("./chicomoedas.jpg")}
            style={{ maxWidth: 310 }} />
          <Card.Body>
            <Card.Title>Chico Coins</Card.Title>
            <Card.Text>
            O maior ídolo da nação brasileira!!
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img
            variant="top"
            src={require("./chicomoedas4.jpg")}
            style={{ maxWidth: 310 }} />

          <Card.Body>
            <Card.Title>Chico Coins</Card.Title>
            <Card.Text>
            O maior ídolo da nação brasileira!!
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top"
            src={require("./chicomoedas.jpg")}
            style={{ maxWidth: 310 }} />
          <Card.Body>
            <Card.Title>Chico Coins</Card.Title>
            <Card.Text>
            O maior ídolo da nação brasileira!!
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top"
            src={require("./chicomoedas.jpg")}
            style={{ maxWidth: 310 }} />
          <Card.Body>
            <Card.Title>Chico Coins</Card.Title>
            <Card.Text>
              O maior ídolo da nação brasileira!!
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top"
            src={require("./chicomoedas3.jpg")}
            style={{ maxWidth: 310 }} />
          <Card.Body>
            <Card.Title>Chico Coins</Card.Title>
            <Card.Text>
              O maior ídolo da nação brasileira!!
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top"
            src={require("./chicomoedas4.jpg")}
            style={{ maxWidth: 310 }} />
          <Card.Body>
            <Card.Title>Chico Coins</Card.Title>
            <Card.Text>
              O maior ídolo da nação brasileira!!
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top"
            src={require("./chicomoedas3.jpg")}
            style={{ maxWidth: 310 }} />
          <Card.Body>
            <Card.Title>Chico Coins</Card.Title>
            <Card.Text>
              O maior ídolo da nação brasileira!!
            </Card.Text>
          </Card.Body>
        </Card>




      </AlbumStyle>
    </CardGroup>
  );
}


