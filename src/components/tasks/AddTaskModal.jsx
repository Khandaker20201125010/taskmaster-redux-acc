import Modal from "../ui/Modal";

const AddTaskModal = ({isOpen, setIsOpen}) => {
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Add Task">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nobis corrupti optio eius modi qui unde ab aspernatur ea ullam voluptatibus doloremque ut exercitationem velit esse, labore quibusdam quis nesciunt.</p>
      </Modal>
    );
};

export default AddTaskModal;