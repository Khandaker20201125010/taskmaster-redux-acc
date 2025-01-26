import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Add Task">
      <form onSubmit={handleSubmit(onSubmit)}>
       <div className="mb-3 flex flex-col gap-3 ">
       <label htmlFor="title" >Title</label>
       <input className ="border border-secondary/20 rounded-md p-2" type="text" id="title"{ ...register("name") }/>
       </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
