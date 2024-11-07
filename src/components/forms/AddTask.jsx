import Modal from './../modal';
import { ModalHeaderDefault, ModalFooterDefault } from './../modal';

export function AddTaskModalFormButton() {
    return (
        <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#addTaskModal"
        >
            Add Task
        </button>
    );
}

export function AddTaskModalForm(){
    return (
        <>
        <Modal
            id="#addTaskModal"
            header={<ModalHeaderDefault title="Task" />}
            footer={<ModalFooterDefault button1="Cancel" button2="Add Task"/>}
        >
            <form>
                stuff
            </form>
        </Modal>
        </>
    );
}

export default AddTaskModalForm;