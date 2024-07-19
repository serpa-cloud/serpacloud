// @flow
import React, { useState } from 'react';
import stylex from '@serpa-cloud/stylex';

import Icon from './Icon';
import Text from './Text';
import Grid from './Grid';
import Padding from './Padding';
import Flexbox from './Flexbox';
import Divider from './Divider';
import Checkbox from './Checkbox';
import ContextualMenu from './ContextualMenu';
import FastSearchInput from './FastSearchInput';
import InteractiveElement from './InteractiveElement';

import invariant from './utils/invariant';

import useDevice from '../hooks/useDevice';

const styles = stylex.create({
  container: {
    position: 'relative',
  },
  content: {
    minWidth: 240,
  },
  mobileContent: {
    width: '100%',
    position: 'fixed',
    backgroundColor: '#fff',
    bottom: 0,
    left: 0,
    right: 0,
  },
  row: {
    width: '100%',
    minHeight: 40,
    display: 'flex',
    cursor: 'pointer',
    borderRadius: 8,
    alignItems: 'center',
    transitionProperty: 'all',
    outline: 'none',
    transitionDuration: 'var(--fds-duration-short-in)',
    transitionTimingFunction: 'var(--fds-animation-fade-in)',
    ':hover': {
      backgroundColor: 'var(--neutral-color-300)',
      transitionDuration: 'var(--fds-duration-short-out)',
      transitionTimingFunction: 'var(--fds-animation-fade-out)',
    },
    ':focus': {
      backgroundColor: 'var(--neutral-color-300)',
      transitionDuration: 'var(--fds-duration-short-out)',
      transitionTimingFunction: 'var(--fds-animation-fade-out)',
    },
    ':active': {
      backgroundColor: 'var(--neutral-color-300)',
      transitionDuration: 'var(--fds-duration-short-out)',
      transitionTimingFunction: 'var(--fds-animation-fade-out)',
    },
  },
  rowSelected: {
    backgroundColor: 'var(--neutral-color-300)',
    transitionDuration: 'var(--fds-duration-short-out)',
    transitionTimingFunction: 'var(--fds-animation-fade-out)',
  },
  rowContent: {
    width: '100%',
  },
  resultsContainer: {
    overflow: 'auto',
    maxHeight: 216,
  },
});

type CascaderOptionProps = {|
  +value: string,
  +label: React$Node,
  +selectable?: ?boolean,
  +children?: ?React$Node,
  +callback?: ?() => void,
  +placeholderLabel?: ?React$Node,
|};

// eslint-disable-next-line no-unused-vars
export function CascaderOption(_: CascaderOptionProps): React$Node {
  invariant(
    false,
    `A <CascaderOption> is only ever to be used as the child of <Cascader> element, ` +
      `never rendered directly. Please wrap your <CascaderOption> in a <Cascader>.`,
  );
}

type OptionObject = {|
  +value: string,
  +label: React$Node,
  +selectable?: ?boolean,
  +callback?: ?() => void,
  +placeholderLabel?: ?React$Node,
  +children?: ?Array<OptionObject>,
|};

export function createNodesFromChildren(children: React$Node): OptionObject[] {
  const nodes: OptionObject[] = [];

  React.Children.forEach(children, (element) => {
    if (React.isValidElement(element)) {
      if (element.type === React.Fragment) {
        nodes.push(...createNodesFromChildren(element.props.children));
      } else {
        invariant(
          element.type === CascaderOption,
          `[${
            typeof element.type === 'string' ? element.type : element.type.name
          }] is not a <CascaderOption> component. All component children of <Cascader> must be a <CascaderOption> or <React.Fragment>`,
        );

        const { props } = element;
        const node: OptionObject = {
          ...props,
          selectable: props.selectable ?? true,
          children: createNodesFromChildren(props.children),
        };
        nodes.push(node);
      }
    }
  });

  return nodes;
}

export function createNodesFromChildrenFlatten(children: React$Node): OptionObject[] {
  const nodes: OptionObject[] = [];

  React.Children.forEach(children, (element) => {
    if (React.isValidElement(element)) {
      if (element.type === React.Fragment) {
        nodes.push(...createNodesFromChildrenFlatten(element.props.children));
      } else {
        invariant(
          element.type === CascaderOption,
          `[${
            typeof element.type === 'string' ? element.type : element.type.name
          }] is not a <CascaderOption> component. All component children of <Cascader> must be a <CascaderOption> or <React.Fragment>`,
        );

        const { props } = element;
        const node: OptionObject = {
          ...props,
          selectable: props.selectable ?? true,
        };

        nodes.push(node);
        nodes.push(...createNodesFromChildrenFlatten(props.children));
      }
    }
  });

  return nodes;
}

type CascaderPayload = {| nodesIndex?: ?number, selectedId: string |};

type CascaderColumnProps = {|
  +hideSearch?: ?boolean,
  +selected?: ?string,
  +value: Array<string>,
  +nodes: Array<OptionObject>,
  +onChange: (Array<string>) => void,
  +showNextlevel: (CascaderPayload) => void,
|};

function CascaderColumn({
  nodes,
  value,
  selected,
  onChange,
  hideSearch,
  showNextlevel,
}: CascaderColumnProps): React$Node {
  const [search, setSearch] = useState<string>('');
  const { width } = useDevice();
  console.log(width);
  return (
    <div className={stylex(width <= 1000 ? styles.mobileContent : styles.content)}>
      <Padding vertical={8} horizontal={8}>
        {hideSearch || false ? null : (
          <>
            <FastSearchInput onChange={(searchValue) => setSearch(searchValue)} placeholder="" />
            <Padding vertical={8}>
              <Divider />
            </Padding>
          </>
        )}
        <Flexbox flexDirection="column" rowGap={8} className={stylex(styles.resultsContainer)}>
          {nodes.map((node, index) => {
            const isSelected = value.includes(node.value);

            if (
              !search ||
              node.value
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .includes(
                  search
                    .toLowerCase()
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, ''),
                )
            )
              return (
                <InteractiveElement
                  autoFocus={index === 0}
                  key={node.value}
                  className={stylex(
                    styles.row,
                    selected === node.value || isSelected ? styles.rowSelected : null,
                  )}
                  onClick={() => {
                    if (node?.children?.length) {
                      showNextlevel({ nodesIndex: index, selectedId: node.value });
                    } else if (node.selectable) {
                      showNextlevel({ nodesIndex: null, selectedId: node.value });
                      if (isSelected) {
                        onChange(value.filter((x) => x !== node.value));
                      } else onChange([node.value]);
                    }

                    if (node.callback) node.callback();
                  }}
                >
                  <Padding vertical={8} horizontal={8} className={stylex(styles.rowContent)}>
                    <Flexbox alignItems="center" justifyContent="space-between">
                      <Flexbox alignItems="center" columnGap={16}>
                        {node.selectable && (
                          <Checkbox
                            disableFocus={!node?.children?.length}
                            onChange={(_, e) => {
                              e.stopPropagation();
                              if (node.children && node.selectable) {
                                if (isSelected) {
                                  onChange(value.filter((x) => x !== node.value));
                                } else onChange([node.value]);
                              }
                            }}
                            checked={isSelected}
                          />
                        )}
                        <div>
                          {typeof node.label === 'string' ? (
                            <Text type="s1r">{node.label}</Text>
                          ) : (
                            node.label
                          )}
                        </div>
                      </Flexbox>
                      {node?.children?.length ? (
                        <Icon icon="chevron_right" color="--primary-color-1" />
                      ) : null}
                    </Flexbox>
                  </Padding>
                </InteractiveElement>
              );

            return null;
          })}
        </Flexbox>
      </Padding>
    </div>
  );
}

CascaderColumn.defaultProps = {
  selected: null,
  hideSearch: false,
};

type Props = {|
  +value: Array<string>,
  +open: boolean,
  +onClose: () => void,
  +children: React$Node,
  +containerHeight?: ?number,
  +hideSearch?: ?boolean,
  +onChange: (Array<string>) => void,
|};

export default function Cascader({
  open,
  value,
  onClose,
  children,
  onChange,
  hideSearch,
  containerHeight,
}: Props): React$Node {
  const nodes = createNodesFromChildren(children);
  const [cols, setCols] = useState<number[]>([]);
  const [selected, setSelected] = useState([]);

  return (
    <div className={stylex(styles.container)}>
      <ContextualMenu
        anchor="LEFT"
        open={open}
        containerHeight={containerHeight ?? 0}
        onClose={onClose}
        className={stylex(styles.modal)}
      >
        <Grid columns={`repeat(${cols.length + 1}, 320px)`} columnGap={0}>
          <CascaderColumn
            hideSearch={hideSearch}
            nodes={nodes}
            value={value}
            onChange={onChange}
            selected={selected[0] ?? ''}
            showNextlevel={({ nodesIndex, selectedId }) => {
              setSelected((s) => {
                const els = [...s];
                els[0] = selectedId;
                return els.slice(0, 1).filter(Boolean);
              });
              setCols((oldCols) => {
                const els = [...oldCols];
                els[0] = nodesIndex;
                // $FlowIssue
                return els.slice(0, 1).filter((n) => !!n || n === 0);
              });
            }}
          />

          {cols.map((col, colIndex) => {
            let currentNodes: Array<OptionObject> = nodes;

            // eslint-disable-next-line no-plusplus
            for (let i = 0; i <= colIndex; i++) {
              if (currentNodes?.[cols[i]]?.children) currentNodes = currentNodes[cols[i]].children;
            }

            if (currentNodes)
              return (
                <CascaderColumn
                  hideSearch={hideSearch}
                  key={selected[colIndex]}
                  nodes={currentNodes}
                  value={value}
                  selected={selected[colIndex + 1]}
                  onChange={onChange}
                  showNextlevel={({ nodesIndex, selectedId }) => {
                    setSelected((s) => {
                      const els = [...s];
                      els[colIndex + 1] = selectedId;
                      return els.slice(0, colIndex + 2).filter(Boolean);
                    });
                    setCols((oldCols) => {
                      const els: Array<?number> = [...oldCols];
                      els[colIndex + 1] = nodesIndex;
                      // $FlowIssue
                      return els.slice(0, colIndex + 2).filter((n) => !!n || n === 0);
                    });
                  }}
                />
              );
            return null;
          })}
        </Grid>
      </ContextualMenu>
    </div>
  );
}

Cascader.defaultProps = {
  containerHeight: 0,
  hideSearch: false,
};
