// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// const TableWithModal = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [message, setMessage] = useState('');
//   const [name, setName] = useState('');
//   const [query, setQuery] = useState('');
//   const [type, setType] = useState('');
//   const [tableData, setTableData] = useState([]);

//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
  

//   const openModal = () => {
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   const handleSubmit = () => {
//     const newData = { message, name, query, type };
//     setTableData([...tableData, newData]);
//     setModalOpen(false);
//     setMessage('');
//     setName('');
//     setQuery('');
//     setType('');
//   };

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>Message</th>
//             <th>Name</th>
//             <th>Query</th>
//             <th>Type</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tableData.map((data, index) => (
//             <tr key={index}>
//               <td>{data.message}</td>
//               <td>{data.name}</td>
//               <td>{data.query}</td>
//               <td>{data.type}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button onClick={openModal}>Add Data</button>

//       {modalOpen && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={closeModal}>&times;</span>
//             <label>
//               Message:
//               <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
//             </label>
//             <label>
//               Name:
//               <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//             </label>
//             <label>
//               Query:
//               <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
//             </label>
//             <label>
//               Type:
//               <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
//             </label>
//             <button onClick={handleSubmit}>Submit</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TableWithModal;

// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Table from 'react-bootstrap/Table';
// const TableWithModal = () => {
//   const [message, setMessage] = useState('');
//   const [name, setName] = useState('');
//   const [query, setQuery] = useState('');
//   const [type, setType] = useState('');
//   const [tableData, setTableData] = useState([]);
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const handleSubmit = () => {
//     const newData = { message, name, query, type };
//     setTableData([...tableData, newData]);
//     setMessage('');
//     setName('');
//     setQuery('');
//     setType('');
//     handleClose(); // Close the modal after submitting
//   };

//   return (
//     <div>
//       <Table striped>
//         <thead>
//           <tr >
//             <th>Message</th>
//             <th>Name</th>
//             <th>Query</th>
//             <th>Type</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tableData.map((data, index) => (
//             <tr key={index}>
//               <td>{data.message}</td>
//               <td>{data.name}</td>
//               <td>{data.query}</td>
//               <td>{data.type}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//       <Button variant="primary" onClick={handleShow}>Add Data</Button>
//       <Modal show={show} onHide={handleClose} animation={false}>
//         <Modal.Header closeButton>
//           <Modal.Title>Add Data</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>


//         <Form>
//       <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
//         <Form.Label column sm="2">
//           message
//         </Form.Label>
//         <Col sm="10">
//           <Form.Control type="Text" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
//         </Col>
//       </Form.Group>

//       <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
//         <Form.Label column sm="2">
//         Name
//         </Form.Label>
//         <Col sm="10">
//           <Form.Control type="Text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}  />
//         </Col>
//       </Form.Group>

//       <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
//         <Form.Label column sm="2">
//         Query
//         </Form.Label>
//         <Col sm="10">
//           <Form.Control type="Text" placeholder="Query" value={query} onChange={(e) => setQuery(e.target.value)}  />
//         </Col>
//       </Form.Group>

//       <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
//         <Form.Label column sm="2">
//         Type
//         </Form.Label>
//         <Col sm="10">
//           <Form.Control type="Text" placeholder="Type" value={type} onChange={(e) => setType(e.target.value)} />
//         </Col>
//       </Form.Group>
//     </Form>
          
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>Close</Button>
//           <Button variant="primary" onClick={handleSubmit}>Submit</Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default TableWithModal;

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

const TableWithModal = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [query, setQuery] = useState('');
  const [type, setType] = useState('');
  const [tableData, setTableData] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    if (!message || !name || !query || !type) {
      alert('Please fill in all fields');
      return;
    }
    const newData = { message, name, query, type };
    setTableData([...tableData, newData]);
    setMessage('');
    setName('');
    setQuery('');
    setType('');
    handleClose(); // Close the modal after submitting
  };

  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>#</th> {/* Serial number column */}
            <th>Message</th>
            <th>Name</th>
            <th>Query</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td> {/* Display serial number */}
              <td>{data.message}</td>
              <td>{data.name}</td>
              <td>{data.query}</td>
              <td>{data.type}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="primary" onClick={handleShow}>Create New Monitor</Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Message
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Name
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Query
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Query" value={query} onChange={(e) => setQuery(e.target.value)} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Type
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Type" value={type} onChange={(e) => setType(e.target.value)} />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleSubmit}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TableWithModal;


