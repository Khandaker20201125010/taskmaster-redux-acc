import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const disPatch = useDispatch();
  const onCancel = () => {
    reset();
    setIsOpen(false);
  } 
  const onSubmit = (data) => {
    disPatch(addTask(data));
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Add Task">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3 flex flex-col gap-3 ">
          <label htmlFor="title">Title</label>
          <input
            className="border border-secondary/20 rounded-md p-2"
            type="text"
            id="title"
            {...register("name")}
          />
        </div>
        <div className="mb-3 flex flex-col gap-3">
          <label htmlFor="description">Description</label>
          <textarea
            className="border border-secondary/20 rounded-md p-2 h-24"
            name=""
            {...register("description")}
            id="description"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="mb-3 flex flex-col gap-3">
          <label htmlFor="date">Deadline</label>
          <input
            className="border border-secondary/20 rounded-md p-2"
            type="date"
            name="date"
            id="date"
          />
        </div>
        <div className="mb-3 flex flex-col gap-3">
          <label htmlFor="assignedTo">Assigned To</label>
          <select
            className="border border-secondary/20 rounded-md p-2"
            name=""
            id="assignedTo"
            {...register("assignedTo")}
          >
            <option value="Pranto">Pranto </option>
            <option value="Masud">Masud </option>
            <option value="siddik">Siddik</option>
            <option value="himadry">Himadry</option>
            <option value="moni">Moni</option>
            <option value="murad">Murad</option>
          </select>
        </div>
        <div className="mb-3 flex flex-col gap-3">
          <label htmlFor="priority">Priority</label>
          <select id="priority" {...register("priority")} className="border border-secondary/20 rounded-md p-2">
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="flex gap-3 mt-5">
          <button className="btn btn-primary hover:bg-blue-600" type="submit">
            Submit
          </button>
          <button  type="button" onClick={onCancel} className="btn btn-danger hover:bg-red-600">Cancel</button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
