import React, { PureComponent } from 'react';
import classnames from 'classnames';

// import * as propTypes from './propTypes';

export default class List extends PureComponent {
  // static propTypes = propTypes;

  render() {
    const {
      list,
      listId,
      listStyle,
      connectDragSource,
      connectDropTarget,
      isDragging,
      children
    } = this.props;

    let listContainerClass = classnames({
      ListContainer: true,
      ListPlaceholder: isDragging
    });

    return (
      <div className="ListWrapper" style={listStyle}>
        <div className={listContainerClass}>
          {connectDragSource(
            <div className="ListHeader">
              <span className="ListTitle">
                List {listId} ({list.rows.length})
              </span>
            </div>
          )}
          {connectDropTarget(<div className="ListContent">{children}</div>)}
          <div className="ListFooter">
            <div className="ListActions">
              <button className="ListActionItem">Add a task...</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
