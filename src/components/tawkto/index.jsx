import React from 'react';
import { useRef } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
const Index = () => {
	const tawkMessengerRef = useRef();

	const handleMinimize = () => {
		tawkMessengerRef.current.minimize();
	};

	return (
		<div>
			<TawkMessengerReact
				propertyId='62abd20fb0d10b6f3e77c77f'
				widgetId='1g5nip39v'
				useRef={tawkMessengerRef}
			/>
		</div>
	);
};

export default Index;
