import styled from '@emotion/styled';
import tw from 'twin.macro';

interface ContainerProps<T> {
	item: (props: T, index: number) => JSX.Element;
	items: Array<T>;
}

const StyledContainer = styled.ul(tw`
	flex flex-col space-y-4
`);

export function Container<T>({ item: Component, items }: ContainerProps<T>) {
	if (!items) {
	  return null;
	}

	console.log('items', items)
  
	return (
	  <StyledContainer role="list">
		{items.map((item, index) => (
		  <Component key={index} index={index} {...item} />
		))}
	  </StyledContainer>
	);
}
  