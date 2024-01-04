import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Navbar = () => {
	return (
		<div>
			<AppBar position='static'>
				<Container maxWidth='lg'>
					<Toolbar>
						<Typography variant='h6' component='div'>
							Mortgage Calculator
						</Typography>
					</Toolbar>
				</Container>
			</AppBar>
		</div>
	);
};

export default Navbar;
