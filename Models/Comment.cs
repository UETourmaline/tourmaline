namespace tourmaline.Models;

public class Comment
{
    public Comment(int id = -1, string content = "", int songId = -1, string username = "")
    {
        Id = id;
        Content = content;
        CreateTime = DateTime.Parse("1970-01-01 00:00:00");
        LastEditedTime = DateTime.Parse("1970-01-01 00:00:00");
        SongId = songId;
        UserName = username;
    }

    public int Id { get; set; }
    public string Content { get; set; }
    public DateTime CreateTime { get; set; }
    public DateTime LastEditedTime { get; set; }
    public int SongId { get; set; }
    public string UserName { get; set; }
}