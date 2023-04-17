import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

function TableOfContents({ lastSidebarItemRef }) {
  const [activeId, setActiveId] = useState();
  const { nestedHeadings } = useHeadingsData();
  useIntersectionObserver(setActiveId);

  return (
    <nav aria-label="Table of contents">
      <Headings
        lastSidebarItemRef={lastSidebarItemRef}
        headings={nestedHeadings}
        activeId={activeId}
      />
    </nav>
  );
}

function Headings({ lastSidebarItemRef, headings, activeId }) {
  return (
    <StyledHeadings>
      {headings.map((heading, index, headings) => {
        const isLastSidebarItem =
          index === headings.length - 1 && heading.items.length === 0;

        return (
          <li
            key={heading.id}
            className={heading.id === activeId ? "active" : ""}
          >
            <Link
              ref={isLastSidebarItem ? lastSidebarItemRef : undefined}
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(`#${heading.id}`).scrollIntoView();
              }}
            >
              {heading.title}
            </Link>
            {heading.items.length > 0 && (
              <Subheadings>
                {heading.items.map((child, index, children) => {
                  const isLastSidebarItem = index === children.length - 1;

                  return (
                    <li
                      key={child.id}
                      className={child.id === activeId ? "active" : ""}
                    >
                      <Link
                        ref={isLastSidebarItem ? lastSidebarItemRef : undefined}
                        href={`#${child.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .querySelector(`#${child.id}`)
                            .scrollIntoView();
                        }}
                      >
                        {child.title}
                      </Link>
                    </li>
                  );
                })}
              </Subheadings>
            )}
          </li>
        );
      })}
    </StyledHeadings>
  );
}

function useHeadingsData() {
  const [nestedHeadings, setNestedHeadings] = useState([]);

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll("h2, h3"));

    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, []);

  return { nestedHeadings };
}

function useIntersectionObserver(setActiveId) {
  const headingElementsRef = useRef({});

  useEffect(() => {
    function callback(headings) {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement;

        return map;
      }, headingElementsRef.current);

      const visibleHeadings = [];

      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];

        if (headingElement.isIntersecting) {
          visibleHeadings.push(headingElement);
        }
      });

      function getIndexFromId(id) {
        return headingElements.findIndex((heading) => heading.id === id);
      }

      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
        );

        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    }

    const observer = new IntersectionObserver(callback, {
      rootMargin: "0px 0px -40% 0px",
    });

    const headingElements = Array.from(document.querySelectorAll("h2, h3"));

    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [setActiveId]);
}

function getNestedHeadings(headingElements) {
  const nestedHeadings = [];

  headingElements.forEach((heading) => {
    const { innerText: title, id } = heading;

    if (heading.nodeName === "H2") {
      nestedHeadings.push({ id, title, items: [] });
    } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id,
        title,
      });
    }
  });

  return nestedHeadings;
}

const StyledHeadings = styled.ul`
  font-size: var(--font-size-sm);
  padding-left: var(--spacing-lg);

  li.active > a {
    color: ${({ theme }) => theme.primary};
  }
`;

const Subheadings = styled.ul`
  padding-left: var(--spacing-lg);
`;

const Link = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;
  overflow-wrap: normal;
  max-width: 30ch;
  padding: var(--spacing-md) var(--spacing-lg);

  &:hover,
  &:active {
    color: ${({ theme }) => theme.primary};
  }
`;

export default TableOfContents;
