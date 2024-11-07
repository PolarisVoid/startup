export function ModalHeaderDefault({ title }) {
  return (
    <>
      <h5 className="modal-title">
        {title}
      </h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
    </>
  );
}

export function ModalFooterDefault({ button1, button2 }) {
  return (
    <>
      <button type="button" className="btn btn-secondary" data-dismiss="modal">
        {button1}
      </button>
      <button type="button" className="btn btn-primary-1">
        {button2}
      </button>
    </>
  );
}

function Modal({ id, header, footer, children }) {
  return (
    <div className="modal" tabindex="-1" role="dialog" id={id} aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">{header}</div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">{footer}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
