(() => {

    // 1. Función para obtener información de una película por Id
    function getAllMovies(movieId: string) {
        console.log({ movieId });
    }

    //Response:
    function getMovieById(id: string) {
        console.log({ id });
    }

    // 2. Función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getAllMovieActors(id: string) {
        console.log({ id });
    }

    //Response:
    function getMovieCastById(id: string) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getUsuario(ActorId: string) {
        console.log({ ActorId });
    }

    //Response:
    function getActorBioById(id: string) {
        console.log({ id });
    }

    // Crear una película
    function movie(title: string, description: string, rating: number, cast: string[]) {
        console.log({ title, description, rating, cast });
    }

    //Response:
    interface Movie {
        cast: string[];
        description: string;
        rating: number;
        title: string;
    }
    function createMovie({ title, description, rating, cast }: Movie) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActorIfActorNotExists(fullName: string, birthdate: Date): boolean {

        // tarea asincrona para verificar nombre
        // ..
        // ..
        if (fullName === 'fernando') return false;

        console.log('Crear actor');
        return true;

    }

    //Response:
    function checkFullName(fullName: string) {
        console.log({ fullName });
        return true
    }
    function createActorI(fullName: string, birthdate: Date): boolean {

        // tarea asincrona para verificar nombre
        // ..
        // ..
        if (checkFullName(fullName)) return false;

        console.log('Crear actor');
        return true;

    }

    //Continuación clase 04
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        let result;
        if (isDead) {
            result = 1500;
        } else {
            if (isSeparated) {
                result = 2500;
            } else {
                if (isRetired) {
                    result = 3000;
                } else {
                    result = 4000;
                }
            }
        }

        return result;
    }

    const getPayAmountR = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
        if (isDead) return 1500;
        if (isSeparated) return 2500;
        return isRetired ? 3000 : 4000;
        
    }
})();
