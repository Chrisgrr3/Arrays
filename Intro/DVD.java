// A simple definition for a DVD.
public class DVD {
    public String name;
    public int releaseYear;
    public String director;

    public DVD(String name, int releaseYear, String director) {
        this.name = name;
        this.releaseYear = releaseYear;
        this.director = director;
    }

    public String toString() {
        String str = this.name + ", directed by " + this.director + ", released in " + this.releaseYear;
        System.out.println(
            this.name + ", directed by " + this.director + ", released in " + this.releaseYear);
        return str;
    }
}