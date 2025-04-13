import cors from 'cors'
const initApp = async (app, express) => {
    app.use(express.json());
    app.use(cors());
    app.get('/', (req, res) => {
        return res.status(200).json({ message: 'Welcome...' })
    })
    // app.all('*', (req, res) => {
    //     return res.status(404).json({ message: 'Page not found' });
    // });


}

export default initApp