<Window>
	
	<ImageBackground
		width={'100%'}
		marginTop={40}
		height={120}
		backgroundSize={100}
		backgroundPosition={'center center'}
		backgroundRepeat={'no-repeat'}
		source={require('../assets/pictures/logo-ame.png')}>&nbsp;</ImageBackground>

	<Title block textAlign={'center'} fontSize={24}>Ame Mini-App de Luis Felipe</Title>

	<Separator marginBottom={0} marginTop={40} height={1.5} />	

	<Title block textAlign={'center'}>Vivendas da Barra</Title>

	<Text block textAlign={'center'}>Doações para funcionarios de Segurança</Text>

	<Separator marginBottom={0} marginTop={40} height={1.5} />
    
    <Title block textAlign={'center'}>Utilize o link abaixo para compartilhar</Title>
    
    <TextLink block textAlign={'center'} onClic={() => {''}}>http://amedigital.com/asdioja</TextLink>

	<Separator marginBottom={0} marginTop={40} height={1.5} />

	<FlexBox>
		<SolidButton size={"medium"} backgroundColor={"#EF3867"}>COPIAR LINK</SolidButton>
    	<SolidButton size={"medium"} backgroundColor={"#EF3867"}> EDITAR LISTA </SolidButton>
	</FlexBox>
	  
</Window>
