var xmlhttp = new XMLHttpRequest();

class ContributionActivity {
    constructor(year, month, repo, action) {
        this.year         = year;
        this.month        = month;
        this.repo         = repo;
        this.action       = action;  // ["commit"|"pull_request"|"star"]

        this.commit_count = 0;
        this.pull_request_title = "";
        this.url = "";
    }
}

// 最新情報の表示
// GitHubのContribution activityを表示する
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4) {
        if (xmlhttp.status != 200) {
            console.log("Failed to download contents");
            var latest = document.getElementById("latest_information");
            latest.innerHTML = "データの取得に失敗<br />";
            return;
        }

        var data = JSON.parse(xmlhttp.responseText);
        var latest = document.getElementById("latest_information");
        var litr = document.getElementById("latest_information_table_row");
        var contribution_activities = [];

        data.forEach(d => {
            var created_at = new Date(d.created_at);
            var year = created_at.getFullYear() + "年";
            var month = (created_at.getMonth() + 1) + "月";
            var repo = d.repo.name;

            var new_activity = true;
            contribution_activities.forEach(ca => {
                if (year == ca.year && month == ca.month && repo == ca.repo) {
                    if (d.payload.commits) {
                        ca.commit_count += d.payload.commits.length;
                        new_activity = false;
                        return;  // forEachでのcontinue
                    }
                }
            });

            if (new_activity) {
                if (d.payload.commits) {
                    // commit
                    var ca = new ContributionActivity(year, month, repo, "commit");
                    ca.commit_count = d.payload.commits.length;
                    contribution_activities.push(ca);
                } else if (d.payload.pull_request && d.payload.pull_request.merged) {
                    // merge
                    var ca = new ContributionActivity(year, month, repo, "pull_request");
                    ca.pull_request_title = d.payload.pull_request.title;
                    ca.url = d.payload.pull_request.html_url;
                    contribution_activities.push(ca);
                } else if (d.payload.action == "started") {
                    // star
                    var ca = new ContributionActivity(year, month, repo, "star");
                    contribution_activities.push(ca);
                }
            }
        });

        if (contribution_activities.length == 0) { return; }

        // 月毎に表示する
        for (var i = 0; i < contribution_activities.length; ++i) {
            var ca = contribution_activities[i];

            // [20XX年 XX月]の表示
            latest.innerHTML += "<table><tr><td><nobr>" + ca.year + " " + ca.month + "</nobr></td><td width='200'><hr size='1'></td></tr></table>";

            // activityの表示
            for (; i < contribution_activities.length; ++i) {
                var ca2 = contribution_activities[i];

                if (ca.year != ca2.year || ca.month != ca2.month) {
                    --i;
                    break;
                }

                if (ca2.action == "commit") {
                    latest.innerHTML += "<a href='https://github.com/" + ca2.repo + "' target='_blank'>" + ca2.repo + "</a>&nbsp;&nbsp;" + ca2.commit_count + " commit" + ((ca2.commit_count != 1) ? "s" : "") + "<br>";
                } else if (ca2.action == "pull_request") {
                    latest.innerHTML += merged_svg();
                    latest.innerHTML += " <a href='" + ca2.url+ "' target='_blank' style='color:#24292E;text-decoration:none'>" + ca2.pull_request_title + "</a><br>";
                } else if (ca2.action == "star") {
                    latest.innerHTML += "★ <a href='https://github.com/" + ca2.repo + "' target='_blank' style='color:#24292E;text-decoration:none'>" + ca2.repo + "</a><br>";
                }
            }

            latest.innerHTML += "<br>";
        };
    }
}

function merged_svg() {
    return '<svg title="Merged" class="octicon octicon-git-merge text-purple" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M5 3.254V3.25v.005a.75.75 0 110-.005v.004zm.45 1.9a2.25 2.25 0 10-1.95.218v5.256a2.25 2.25 0 101.5 0V7.123A5.735 5.735 0 009.25 9h1.378a2.251 2.251 0 100-1.5H9.25a4.25 4.25 0 01-3.8-2.346zM12.75 9a.75.75 0 100-1.5.75.75 0 000 1.5zm-8.5 4.5a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>';
}

xmlhttp.open("GET", "https://api.github.com/users/kumavale/events");
xmlhttp.send();

