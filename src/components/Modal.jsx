export function ModalHeaderDefault({ title }) {
  return (
    <>
      <h5 class="modal-title" id="exampleModalLongTitle">
        {title}
      </h5>
      <button
        type="button"
        class="close"
        data-dismiss="modal"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </>
  );
}

export function ModalFooterDefault({}) {
  return (
    <>
      <button type="button" class="btn btn-secondary" data-dismiss="modal">
        Close
      </button>
      <button type="button" class="btn btn-primary-1">
        Save changes
      </button>
    </>
  );
}

function Modal({id, header, footer, children }) {
  return (
    <div class="modal" tabindex="-1" role="dialog" id={id}>
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">{header}</div>
          <div class="modal-body">{children}</div>
          <div class="modal-footer">{footer}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
