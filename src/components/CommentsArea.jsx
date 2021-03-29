import React from "react";
import { Button, Modal } from "react-bootstrap";

const url = "https://striveschool-api.herokuapp.com/api/comments/";
class CommentsArea extends React.Component {
  state = {
    isError: false,
    comments: [],
  };
  componentDidMount = async () => {
    try {
      let response = await fetch(url, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUyMTAwMTg5YzI2ZjAwMTU3ZjljNTciLCJpYXQiOjE2MTU5OTA3ODYsImV4cCI6MTYxNzIwMDM4Nn0.iB1IT2zQKjETNfmxqErhNAC4So3s_iiDL6-WenmxgiA",
        },
      });
      if (response.ok) {
        let dataBooks = await response.json();
        console.log(dataBooks);
        this.setState({
            comments: dataBooks
        });
      } else {
        this.setState({
          isError: true,
        });
      }
    } catch (error) {
      this.setState({
        isError: true,
      });
      console.log(error);
    }
  };
  render() {
    return (
      <div>
        {this.state.comments.map(com=>(
        <Modal.Dialog key={this.state.comments._id}>
            <Modal.Header closeButton>
              <Modal.Title>{com.author}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>{com.comment}</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary">Close</Button>
              <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal.Dialog>
      ))}
      </div>
    );
  }
}

export default CommentsArea;
