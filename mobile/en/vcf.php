<?php
        if((isset($_GET['adr'])) && (strlen(trim($_GET['adr'])) > 0)){
                $mail = stripslashes(strip_tags($_GET['adr']));
				
        }else{
                $mail = 'contact@koncept47.com';
        }

if (!preg_match("#^[a-z0-9._-]+@(hotmail|live|msn).[a-z]{2,4}$#", $mail)) // On filtre les serveurs qui pr�sentent des bogues.
{
	$passage_ligne = "\r\n";
}
else
{
	$passage_ligne = "\n";
}
//=====D�claration des messages au format texte et au format HTML
$message_txt = " Thank you for visiting the website of SAS Tamara CHERGUI-VILO Notary Office. Please find attached our business card as requested.
By opening the attached file, you can easily add our contact information to your address book. 
We look forward to hearing from you.
.";
$message_html = "<html><head></head><body>
Thank you for visiting the website of SAS Tamara CHERGUI-VILO Notary Office. Please find attached our business card as requested.<br/>
By opening the attached file, you can easily add our contact information to your address book.<br/>
We look forward to hearing from you.
<br/><br/>
</body></html>
";
//==========
 
//=====Lecture et mise en forme de la pi�ce jointe.
$fichier   = fopen("../SCP-KACY.vcf", "r");
$attachement = fread($fichier, filesize("../SCP-KACY.vcf"));
$attachement = chunk_split(base64_encode($attachement));
fclose($fichier);
//==========
 
//=====Cr�ation de la boundary.
$boundary = "-----=".md5(rand());
$boundary_alt = "-----=".md5(rand());
//==========
 
//=====D�finition du sujet.
$sujet = "SAS Tamara CHERGUI-VILO vcard";
//=========
 
//=====Cr�ation du header de l'e-mail.
$header = "From: \"SAS Tamara CHERGUI-VILO\"<office-chergui-vilo@notaires.fr>".$passage_ligne;
$header.= "Reply-to: \"SAS Tamara CHERGUI-VILO\" <office-chergui-vilo@notaires.fr>".$passage_ligne;
$header.= "MIME-Version: 1.0".$passage_ligne;
$header.= "Content-Type: multipart/mixed;".$passage_ligne." boundary=\"$boundary\"".$passage_ligne;
$header .= "X-Sender: <www.kacy.notaires.fr>".$passage_ligne;
$header .= "X-Mailer: PHP".$passage_ligne;
$header .= "X-auth-smtp-user: postmaster@kacy.notaires.fr".$passage_ligne;
$header .= "X-abuse-contact: postmaster@kacy.notaires.fr".$passage_ligne; 
//==========
 
//=====Cr�ation du message.
$message = $passage_ligne."--".$boundary.$passage_ligne;
$message.= "Content-Type: multipart/alternative;".$passage_ligne." boundary=\"$boundary_alt\"".$passage_ligne;
$message.= $passage_ligne."--".$boundary_alt.$passage_ligne;
//=====Ajout du message au format texte.
$message.= "Content-Type: text/plain; charset=\"ISO-8859-1\"".$passage_ligne;
$message.= "Content-Transfer-Encoding: 8bit".$passage_ligne;
$message.= $passage_ligne.$message_txt.$passage_ligne;
//==========
 
$message.= $passage_ligne."--".$boundary_alt.$passage_ligne;
 
//=====Ajout du message au format HTML.
$message.= "Content-Type: text/html; charset=\"ISO-8859-1\"".$passage_ligne;
$message.= "Content-Transfer-Encoding: 8bit".$passage_ligne;
$message.= $passage_ligne.$message_html.$passage_ligne;
//==========
 
//=====On ferme la boundary alternative.
$message.= $passage_ligne."--".$boundary_alt."--".$passage_ligne;
//==========
  
$message.= $passage_ligne."--".$boundary.$passage_ligne;
 
//=====Ajout de la pi�ce jointe.
$message.= "Content-Type: text/x-vcard; name=\"SCP-KACY.vcf\"".$passage_ligne;
$message.= "Content-Transfer-Encoding: base64".$passage_ligne;
$message.= "Content-Disposition: attachment; filename=\"SCP-KACY.vcf\"".$passage_ligne;
$message.= $passage_ligne.$attachement.$passage_ligne.$passage_ligne;
$message.= $passage_ligne."--".$boundary."--".$passage_ligne; 
//========== 
//=====Envoi de l'e-mail.
mail($mail,$sujet,$message,$header);

?>