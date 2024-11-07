import "./Accordion.css";

function AccordionItem({ id, title, children }) {
  return (
    <>
      <div className="accordion-header">
        <a data-bs-toggle="collapse" href={`#${id}`}>
          {title}
        </a>
      </div>
      <div id={`${id}`} className="collapse">
        <div className="card-body">{children}</div>
      </div>
    </>
  );
}

export function AccordionItemHeader({ id, title, children }) {
  return (
    <>
      <div className="accordionHeader-header">
          <a className="accordionHeading" data-bs-toggle="collapse" href={`#${id}`}>
            {title}
          </a>
      </div>
      <div id={`${id}`} className="collapse show">
        <div className="card-body">{children}</div>
      </div>
    </>
  );
}

export default AccordionItem;
