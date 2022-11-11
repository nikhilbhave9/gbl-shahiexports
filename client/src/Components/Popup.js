import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Axios from 'axios';

function PopupForm() {

    const [formData, setFormData] = useState({
        // branch: "",
        // reportingMethod: "",
        // category: "",
        // subCategory: "",
        // priority: "",
        // nature: "",
        // manager: "",
        // reporter: "",
        // status: "",
    });

    const setField = (field, value) => {
        setFormData({
            ...formData,
            [field]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
        Axios.post("http://localhost:9000/cases", {
            branch: formData.branch,
            reportingMethod: formData.reporting,
            category: formData.category,
            subCategory: formData.subcategory,
            priority: formData.priority,
            nature: formData.nature,
            manager: formData.manager,
            reporter: formData.reporter,
            status: formData.status,
        })
            .then((response) => {
                setFormData(response);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="m-4" >
                <Form.Text className='mt-3'>
                    Enter New Case Details
                </Form.Text>
            </Form.Group>

            <Row>
                <Col>
                    <Form.Group className="mb-1" controlId="branch">
                        <Form.Label>Branch</Form.Label>
                        <Form.Select
                            aria-label="Default select example"
                            value={formData.branch}
                            onChange={e => setField('branch', e.target.value)}
                        >
                            <option>Select Branch:</option>
                            <option value="Branch 1">Branch 1</option>
                            <option value="Branch 2">Branch 2</option>
                            <option value="Branch 3">Branch 3</option>
                            <option value="Branch 4">Branch 4</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-1" controlId="reporting">
                        <Form.Label>Reporting </Form.Label>
                        <Form.Select
                            aria-label="Default select example"
                            value={formData.reporting}
                            onChange={e => setField('reporting', e.target.value)}
                        >
                            <option>Reporting Method:</option>
                            <option value="Call">Call</option>
                            <option value="In-person">In-person</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-1" controlId="category">
                        <Form.Label>Category</Form.Label>
                        <Form.Select
                            aria-label="Default select example"
                            value={formData.category}
                            onChange={e => setField('category', e.target.value)}
                        >
                            <option>Category:</option>
                            <option value="Grievance">Grievance</option>
                            <option value="Employment">Employment</option>
                            <option value="General">General</option>
                            <option value="General">General</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Group className="mb-1" controlId="subcategory">
                        <Form.Label>Sub-category</Form.Label>
                        <Form.Select
                            aria-label="Default select example"
                            value={formData.subcategory}
                            onChange={e => setField('subcategory', e.target.value)}
                        >
                            <option>Sub-category:</option>
                            <option value="Query">Query</option>
                            <option value="Complaints">Complaints</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-1" controlId="priority">
                        <Form.Label>Priority</Form.Label>
                        <Form.Select
                            aria-label="Default select example"
                            value={formData.priority}
                            onChange={e => setField('priority', e.target.value)}
                        >
                            <option>Priority:</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-1" controlId="nature">
                        <Form.Label>Nature</Form.Label>
                        <Form.Select
                            value={formData.nature}
                            onChange={e => setField('nature', e.target.value)}
                        >
                            <option>Nature:</option>
                            <option value="Health">Health</option>
                            <option value="Transport">Transport</option>
                            <option value="Property">Property</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Group className="mb-1" controlId="manager">
                        <Form.Label>Case Manager</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Manager"
                            value={formData.manager}
                            onChange={(e) => setField('manager', e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-1" controlId="reporter">
                        <Form.Label>Case Reporter</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Case Reporter"
                            value={formData.reporter}
                            onChange={(e) => setField('reporter', e.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Group className="mb-1" controlId="status">
                        <Form.Label>Case Status</Form.Label>
                        <Form.Select
                            aria-label="Default select example"
                            value={formData.status}
                            onChange={e => setField('status', e.target.value)}
                        >
                            <option>Status:</option>
                            <option value="Not Prepared">Not Prepared</option>
                            <option value="In-progres">In-progres</option>
                            <option value="Outstanding">Outstanding</option>
                            <option value="Closed">Closed</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <Button variant="primary" type="submit" className='mt-2' onClick={handleSubmit}>
                Submit
            </Button>
        </Form>

    );
}

export default PopupForm;