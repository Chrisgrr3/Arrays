public class DVDTest {
    public static void main(String[] args) {
        DVD[] dvdCollection = new DVD[15];

        // Writing items into the array
        DVD avengersDVD = new DVD("The Avengers", 2012, "Joss Whedon");
        DVD incrediblesDVD = new DVD("The Incredibles", 2004, "Brad Bird");
        DVD findingDoryDVD = new DVD("Finding Dory", 2016, "Andrew Stanton");
        DVD lionKingDVD = new DVD("The Lion King", 2019, "Jon Favreau");
        dvdCollection[7] = avengersDVD;
        dvdCollection[3] = incrediblesDVD;
        dvdCollection[9] = findingDoryDVD;
        dvdCollection[2] = lionKingDVD;

        // Reading items in the array
        System.out.println(dvdCollection[7]); // The Avengers, directed by Joss Whedon, released in 2012
        System.out.println(dvdCollection[10]); //null
        System.out.println(dvdCollection[3]); //The Incredibles, directed by Brad Bird, released in 2004

        // Writing items into array with a loop
        int[] squareNumbers = new int[10];

        for (int i = 0; i < 10; i++) {
            int square = (i + 1) * (i + 1);
            squareNumbers[i] = square;
        }

        // Printing the values for each index of the array
        for (int i = 0; i < 10; i++) {
            System.out.println(squareNumbers[i]);
        }

        for (int square: squareNumbers) {
            System.out.println(square);
        }
    }
}

