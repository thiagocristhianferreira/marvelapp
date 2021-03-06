import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

import ContextMarvel from '../../Context/ContextMarvel';
import loadingGif from '../../Images/loading-buffering.gif';
import { getComics } from '../../Services/marvelAPI';

const MarvelCharacters = () => {
  const { 
    comics, setComics,
    loading, setLoading,
   } = useContext(ContextMarvel);

  useEffect(() => {
    const fetchComics = async () => {
      const result = await getComics();
      setComics(result);
      setLoading(false);
    }
    fetchComics();
  }, [setComics, setLoading]);

  if (loading) {
    return (
      <img
        src={ loadingGif }
        alt="Gif de Loading"
      />
    )
  }
  return (
    <section className="w-100 bg-dark d-flex flex-wrap">
      {/* <Header /> */}
      { comics.map(comic => {
        const { title, description } = comic;
        const { extension, path } = comic.thumbnail;
        const creators = comic.creators.items;
        return (
          <Card className="m-4" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`${path}.${extension}`} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                { description }
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>CRIADORES</ListGroupItem>
              { creators.map(creator => (
                <ListGroupItem>{ creator.name }</ListGroupItem>
              )) }
            </ListGroup>
          </Card>
        )
      }) }
      {/* <Footer /> */}
    </section>
  );
};

export default MarvelCharacters;