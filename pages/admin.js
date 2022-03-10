import Head from 'next/head'

import Header from '@/components/Header/headerIndex'
import { Container } from '@/pageStyles/adminStyle'
import SlideControllerr from '@/components/AdminControllers/SlideController'
import GalleryController from '@/components/AdminControllers/GalleryController'
import CombosController from '@/components/AdminControllers/CombosController'
import PurchasesController from '@/components/AdminControllers/PurchasesController'

const Admin = () => {
	return (
		<>
			<Head>
				<title>Administrador</title>
			</Head>
			<Header />
			<Container>
				<SlideControllerr />
				<GalleryController />
				<CombosController />
				<PurchasesController />
			</Container>
		</>
	)
}

export default Admin
