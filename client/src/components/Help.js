import { Card, Divider, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getPosts } from "../api/posts";
import { isLoggedIn } from "../helpers/authHelper";
import Loading from "./Loading";
import PostCard from "./PostCard";
import HorizontalStack from "./util/HorizontalStack";
import "react-icons/md";
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Help = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState(null);
  const user = isLoggedIn();

  const fetchPosts = async () => {
    const query = { sortBy: "-likeCount" };

    const data = await getPosts(user && user.token, query);

    const topPosts = [];

    if (data && data.data) {
      for (let i = 0; i < 3 && i < data.data.length; i++) {
        topPosts.push(data.data[i]);
      }
    }

    setPosts(topPosts);

    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
  <Card>
   <h1>Where to Get Urgent Help for Mental Health</h1>
    <p>If you need help for a mental health crisis or emergency, you should get immediate expert advice and assessment.
        It's important to know that support services are available for you to access, whatever you’re going through.</p>
    
    <h2>NHS Urgent Mental Health Helplines</h2>
    <p>NHS urgent mental health helplines are for people of all ages.</p>
    <p>You can call for:</p>
    <ul>
        <li>24-hour advice and support – for you, your child, your parent, or someone you care for</li>
        <li>Help to speak to a mental health professional</li>
        <li>An assessment to help decide on the best course of care</li>
    </ul>
    <p><strong>Find a local NHS urgent mental health helpline</strong></p>
    <p><strong>Information:</strong> If you've already been given a crisis line number to use in an emergency, it's best
        to call it.</p>
    
    <h2>Free Listening Services</h2>
    <p>These services offer confidential support from trained volunteers. You can talk about anything that's troubling
        you, no matter how difficult:</p>
    <ul>
        <li>Call 116 123 to talk to Samaritans, or email: <a href="mailto:jo@samaritans.org">jo@samaritans.org</a> for a reply within 24 hours</li>
        <li>Text "SHOUT" to 85258 to contact the Shout Crisis Text Line, or text "YM" if you're under 19</li>
    </ul>
    <p>If you're under 19, you can also call 0800 1111 to talk to Childline. The number will not appear on your phone
        bill.</p>
    <p>These services will only share your information if they are very worried about you or think you are in immediate
        danger.</p>

    <h2>Coping During a Crisis</h2>
    <p>The mental health charity Mind has information on ways to help yourself cope during a crisis.
        This includes calming exercises and a tool to get you through the next few hours.</p>
    
    <h2>Urgent Advice</h2>
    <p><strong>Get advice from 111</strong> or ask for an urgent GP appointment if:</p>
    <ul>
        <li>You are not able to speak to your local NHS urgent mental health helpline</li>
        <li>You need help urgently for your mental health, but it's not an emergency</li>
        <li>You're not sure what to do</li>
    </ul>
    <p>111 will tell you the right place to get help if you need to see someone.</p>
    <p>You may be able to speak to a nurse, or mental health nurse, over the phone.</p>
    <p>A GP can advise you about helpful treatments and also help you access mental health services. You may be able to
        refer yourself to some services.</p>
    
    <h2>Immediate Action Required</h2>
    <p><strong>Call 999 or go to A&E now if:</strong></p>
    <ul>
        <li>Someone's life is at risk – for example, they have seriously injured themselves or taken an overdose</li>
        <li>You do not feel you can keep yourself or someone else safe</li>
    </ul>
    <p>A mental health emergency should be taken as seriously as a physical one. You will not be wasting anyone's time.</p>
    <p><strong>Call: 999</strong></p>
    
    <h2>How a Mental Health Emergency Is Treated in A&E</h2>
    <p>If you go to A&E, the staff should treat you with respect and look after any immediate physical and mental health
        needs.</p>
    <p>They should also refer you to a liaison psychiatry service or local crisis resolution and home treatment team
        (CRHT).</p>
    <p>Find out about:</p>
    <ul>
        <li>Liaison psychiatry services on the <a href="https://www.rcpsych.ac.uk/bettermentalhealth" target="_blank" rel="noopener noreferrer">Royal College of Psychiatrists website</a></li>
        <li>Crisis resolution and home treatment teams (CRHTs) on the <a href="https://www.mind.org.uk/information-support/guides-to-support-and-services/crisis-services/useful-contacts/"
                target="_blank" rel="noopener noreferrer">Mind website</a></li>
    </ul>
    <p>The team in charge of your care will assess you and decide on the best course of care.
        This usually involves supporting you with your mental health at home. They may also refer you to other services to
        support your needs.</p>
    
    <h2>Making a Safety Plan</h2>
    <p>If you struggle with suicidal thoughts or are supporting someone else, it may help to make a safety plan to use if
        you need it:</p>
    <ul>
        <li>The <a href="https://www.stayingsafe.net/" target="_blank" rel="noopener noreferrer">Staying Safe website</a> provides information on how to make a safety plan, including video tutorials and online templates to guide you through the process</li>
        <li>The mental health charity <a href="https://www.mind.org.uk/information-support/types-of-mental-health-problems/suicidal-feelings/helping-yourself-now/"
                target="_blank" rel="noopener noreferrer">Mind</a> also provides information on planning for a mental health crisis</li>
    </ul>
  </Card>
  );
};

export default Help;
