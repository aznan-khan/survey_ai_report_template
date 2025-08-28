import React, { useState } from 'react';
import { 
  BarChart3, 
  Users, 
  TrendingUp, 
  AlertTriangle, 
  Target, 
  Clock, 
  ChevronRight, 
  Star,
  ArrowUp,
  ArrowDown,
  Calendar,
  Building,
  UserCircle,
  MessageSquare,
  Lightbulb,
  Award,
  Zap,
  MapPin,
  Briefcase,
  TrendingDown,
  CheckCircle,
  XCircle,
  Activity,
  PieChart,
  BarChart2,
  Filter,
  Eye,
  Brain
} from 'lucide-react';

// Mock data based on the JSON structure
const surveyData = {
  "survey_metadata": {
    "survey_title": "Copy (2) of Milton Employee Engagement Comprehensive Survey FROM sogo_demo07",
    "generation_date": "2025-08-28T13:35:12.499027",
    "report_period": "Q4 2024 Analysis",
    "total_responses": 70000
  },
  "key_metrics": [
    {
      "title": "Employee Net Promoter Score",
      "value": "-14.3",
      "icon": "📈",
      "subtitle": "EX Loyalty Indicator",
      "color": "#3498db"
    },
    {
      "title": "ESAT Score",
      "value": "57.8%",
      "icon": "😊",
      "subtitle": "EX Satisfaction Score",
      "color": "#27ae60"
    },
    {
      "title": "EES Score",
      "value": "14.6",
      "icon": "⚡",
      "subtitle": "EX Effort Score",
      "color": "#f39c12"
    },
    {
      "title": "Recognition",
      "value": "3.1",
      "icon": "📊",
      "subtitle": "Custom Metric (5-point scale)",
      "color": "#8e44ad"
    },
    {
      "title": "Total Responses",
      "value": "70,000",
      "icon": "👥",
      "subtitle": "Survey Participants",
      "color": "#9b59b6"
    },
    {
      "title": "Top Driver for NPS",
      "value": "Work Environment",
      "icon": "🎯",
      "subtitle": "Impact on NPS: 9.6%",
      "color": "#e74c3c"
    },
    {
      "title": "Top Driver for CSAT",
      "value": "Milton made it easy for me to meet my needs",
      "icon": "🎯",
      "subtitle": "Impact on CSAT: 89.5%",
      "color": "#e74c3c"
    },
    {
      "title": "Top Driver for CES",
      "value": "Overall satisfaction working with Milton",
      "icon": "🎯",
      "subtitle": "Impact on CES: 93.3%",
      "color": "#e74c3c"
    },
    {
      "title": "Top Driver for RECOGNITION",
      "value": "Overall satisfaction working with Milton",
      "icon": "🎯",
      "subtitle": "Impact on RECOGNITION: 27.4%",
      "color": "#e74c3c"
    },
    {
      "title": "Completion Rate",
      "value": "95.0%",
      "icon": "🎉💪🌟",
      "subtitle": "Survey Completion",
      "color": "#2ecc71"
    }
  ],
  "nps_breakdown": {
    "promoters": {
      "count": "19981",
      "percentage": "28.5%"
    },
    "passives": {
      "count": "20005",
      "percentage": "28.6%"
    },
    "detractors": {
      "count": "30014",
      "percentage": "42.9%"
    },
    "overall_score": "-14.33"
  },
  "csat_esat_breakdown": {
    "very_satisfied": {
      "count": "20376",
      "percentage": "29.1%"
    },
    "satisfied": {
      "count": "20064",
      "percentage": "28.7%"
    },
    "neutral": {
      "count": "20479",
      "percentage": "29.3%"
    },
    "dissatisfied": {
      "count": "4516",
      "percentage": "6.5%"
    },
    "very_dissatisfied": {
      "count": "4565",
      "percentage": "6.5%"
    },
    "overall_satisfied": {
      "count": "40440",
      "percentage": "57.8%"
    },
    "overall_score": "57.77",
    "metric_type": "ESAT"
  },
  "ces_ees_breakdown": {
    "easy": {
      "count": "10199",
      "percentage": "14.6%"
    },
    "neutral": {
      "count": "39520",
      "percentage": "56.5%"
    },
    "difficult": {
      "count": "20281",
      "percentage": "29.0%"
    },
    "overall_score": "14.57",
    "metric_type": "EES"
  },
  "custom_metric_breakdown": [
    {
      "metric_name": "Recognition",
      "metric_description": "Custom Metric: How well do you feel your work is recognized?",
      "scale_type": "5-point scale",
      "breakdown": [
        {
          "label": "Score 1",
          "count": "12581",
          "percentage": "18.0%",
          "value": "1"
        },
        {
          "label": "Score 2",
          "count": "13158",
          "percentage": "18.8%",
          "value": "2"
        },
        {
          "label": "Score 3",
          "count": "14929",
          "percentage": "21.3%",
          "value": "3"
        },
        {
          "label": "Score 4",
          "count": "14981",
          "percentage": "21.4%",
          "value": "4"
        },
        {
          "label": "Score 5",
          "count": "14351",
          "percentage": "20.5%",
          "value": "5"
        }
      ],
      "overall_score": "3.1",
      "total_responses": 70000,
      "benchmark": {
        "value": "N/A",
        "label": "No benchmark available"
      },
      "is_auto_selected": false
    }
  ],
  "drivers": [
    {
      "name": "Work Environment",
      "correlation": "0.096",
      "description": "Impact on NPS: 9.6%",
      "importance": 0.09616590169936683,
      "question_id": "qno4448593",
      "target_metric": "NPS"
    },
    {
      "name": "Benefits",
      "correlation": "0.092",
      "description": "Impact on NPS: 9.2%",
      "importance": 0.09193247073844797,
      "question_id": "qno4448596",
      "target_metric": "NPS"
    },
    {
      "name": "Training Opportunities",
      "correlation": "0.084",
      "description": "Impact on NPS: 8.4%",
      "importance": 0.08370343242567464,
      "question_id": "qno4448598",
      "target_metric": "NPS"
    },
    {
      "name": "Please rate your level of agreement with this statement: Milton made it easy for me to meet my needs.",
      "correlation": "0.895",
      "description": "Impact on CSAT: 89.5%",
      "importance": 0.8948578860550168,
      "question_id": "qno4448590",
      "target_metric": "CSAT"
    },
    {
      "name": "What is your employment tenure?",
      "correlation": "0.015",
      "description": "Impact on CSAT: 1.5%",
      "importance": 0.01478610317591266,
      "question_id": "qno4448581",
      "target_metric": "CSAT"
    },
    {
      "name": "How well do you feel your work is recognized?",
      "correlation": "0.011",
      "description": "Impact on CSAT: 1.1%",
      "importance": 0.01082773955513437,
      "question_id": "qno4448585",
      "target_metric": "CSAT"
    },
    {
      "name": "How would you rate your overall level of satisfaction working with Milton?",
      "correlation": "0.933",
      "description": "Impact on CES: 93.3%",
      "importance": 0.933323094376281,
      "question_id": "qno4448588",
      "target_metric": "CES"
    },
    {
      "name": "How would you rate your overall level of satisfaction working with Milton?",
      "correlation": "0.274",
      "description": "Impact on RECOGNITION: 27.4%",
      "importance": 0.27365196124543084,
      "question_id": "qno4448588",
      "target_metric": "RECOGNITION"
    },
    {
      "name": "What is your employment tenure?",
      "correlation": "0.143",
      "description": "Impact on RECOGNITION: 14.3%",
      "importance": 0.1434750704312554,
      "question_id": "qno4448581",
      "target_metric": "RECOGNITION"
    },
    {
      "name": "Please rate your level of agreement with this statement: Milton made it easy for me to meet my needs.",
      "correlation": "0.113",
      "description": "Impact on RECOGNITION: 11.3%",
      "importance": 0.11279523863967895,
      "question_id": "qno4448590",
      "target_metric": "RECOGNITION"
    }
  ],
  "demographics": {
    "segments_by_demographic": {
      "qno4448576": {
        "question_text": "What is your gender?",
        "segments": [
          {
            "respondent_count": 17639,
            "avg_satisfaction": "3.7/5",
            "nps": "-15",
            "ces_score": "50.2%",
            "custom_recognition_score": "3.1",
            "key_differentiator": "Not available",
            "segment": "Other"
          },
          {
            "respondent_count": 17483,
            "avg_satisfaction": "3.7/5",
            "nps": "-14",
            "ces_score": "50.4%",
            "custom_recognition_score": "3.1",
            "key_differentiator": "Not available",
            "segment": "Female"
          },
          {
            "respondent_count": 17451,
            "avg_satisfaction": "3.7/5",
            "nps": "-14",
            "ces_score": "50.6%",
            "custom_recognition_score": "3.1",
            "key_differentiator": "Not available",
            "segment": "Male"
          },
          {
            "respondent_count": 17427,
            "avg_satisfaction": "3.7/5",
            "nps": "-14",
            "ces_score": "50.7%",
            "custom_recognition_score": "3.1",
            "key_differentiator": "Not available",
            "segment": "Prefer not to say"
          }
        ]
      },
      "qno4448579": {
        "question_text": "Which department do you work in?",
        "segments": [
          {
            "respondent_count": 10792,
            "avg_satisfaction": "3.7/5",
            "nps": "-13",
            "ces_score": "51.1%",
            "custom_recognition_score": "3.0",
            "key_differentiator": "Not available",
            "segment": "Sales"
          },
          {
            "respondent_count": 12740,
            "avg_satisfaction": "3.7/5",
            "nps": "-16",
            "ces_score": "50.6%",
            "custom_recognition_score": "3.1",
            "key_differentiator": "Not available",
            "segment": "Information Technology"
          },
          {
            "respondent_count": 11089,
            "avg_satisfaction": "3.7/5",
            "nps": "-13",
            "ces_score": "50.4%",
            "custom_recognition_score": "3.1",
            "key_differentiator": "Not available",
            "segment": "Human Resources"
          },
          {
            "respondent_count": 10516,
            "avg_satisfaction": "3.7/5",
            "nps": "-13",
            "ces_score": "50.6%",
            "custom_recognition_score": "3.1",
            "key_differentiator": "Not available",
            "segment": "Marketing"
          },
          {
            "respondent_count": 13792,
            "avg_satisfaction": "3.7/5",
            "nps": "-14",
            "ces_score": "49.9%",
            "custom_recognition_score": "3.1",
            "key_differentiator": "Not available",
            "segment": "Operations"
          },
          {
            "respondent_count": 11071,
            "avg_satisfaction": "3.7/5",
            "nps": "-16",
            "ces_score": "50.5%",
            "custom_recognition_score": "3.1",
            "key_differentiator": "Not available",
            "segment": "Finance"
          }
        ]
      },
      "qno4448581": {
        "question_text": "What is your employment tenure?",
        "segments": [
          {
            "respondent_count": 16217,
            "avg_satisfaction": "3.7/5",
            "nps": "-14",
            "ces_score": "50.2%",
            "custom_recognition_score": "3.1",
            "key_differentiator": "Not available",
            "segment": "Less than 1 year"
          },
          {
            "respondent_count": 12455,
            "avg_satisfaction": "3.7/5",
            "nps": "-14",
            "ces_score": "50.5%",
            "custom_recognition_score": "3.0",
            "key_differentiator": "Not available",
            "segment": "1 year"
          },
          {
            "respondent_count": 16179,
            "avg_satisfaction": "3.7/5",
            "nps": "-14",
            "ces_score": "50.5%",
            "custom_recognition_score": "3.1",
            "key_differentiator": "Not available",
            "segment": "Over 5 years"
          },
          {
            "respondent_count": 12435,
            "avg_satisfaction": "3.7/5",
            "nps": "-15",
            "ces_score": "50.5%",
            "custom_recognition_score": "3.0",
            "key_differentiator": "Not available",
            "segment": "3 years"
          },
          {
            "respondent_count": 5583,
            "avg_satisfaction": "3.6/5",
            "nps": "-15",
            "ces_score": "50.3%",
            "custom_recognition_score": "3.3",
            "key_differentiator": "Not available",
            "segment": "3-5 years"
          },
          {
            "respondent_count": 7131,
            "avg_satisfaction": "3.6/5",
            "nps": "-13",
            "ces_score": "51.1%",
            "custom_recognition_score": "3.3",
            "key_differentiator": "Not available",
            "segment": "1-3 years"
          }
        ]
      }
    },
    "notable_differences": {
      "top_positive_segments": [
        {
          "segment": "Sales",
          "category": "Department",
          "insight": "Sales department has the highest CES score of 51.1% and a relatively high NPS of -13.",
          "action": "Leverage the Sales department's ease of service to model best practices across other departments."
        },
        {
          "segment": "1-3 years",
          "category": "Employment Tenure",
          "insight": "Employees with 1-3 years of tenure have a high CES score of 51.1% and the highest NPS of -13 among tenure segments.",
          "action": "Investigate the practices that contribute to the positive experience of employees with 1-3 years of tenure and apply these insights to other tenure segments."
        }
      ],
      "at_risk_segments": [
        {
          "segment": "Information Technology",
          "category": "Department",
          "insight": "IT department has the lowest NPS of -16, indicating dissatisfaction.",
          "action": "Conduct a detailed survey within the IT department to identify specific pain points and address them to improve satisfaction."
        },
        {
          "segment": "Finance",
          "category": "Department",
          "insight": "Finance department also has a low NPS of -16, suggesting potential issues.",
          "action": "Initiate focus groups within the Finance department to uncover underlying issues and develop targeted interventions."
        }
      ],
      "opportunity_segments": [
        {
          "segment": "Operations",
          "category": "Department",
          "insight": "Operations department has a CES score of 49.9%, slightly below average, with room for improvement.",
          "action": "Enhance training and support for the Operations department to improve ease of service and satisfaction."
        }
      ]
    }
  },
  "segment_performance": [
    {
      "question_level": {
        "What is your employment tenure?": {
          "1.0": {
            "segment": "What is your employment tenure? - 1.0",
            "NPS": "-14",
            "CES": "50.5%",
            "CSAT": "3.7/5",
            "Segment size": "17.8%",
            "key_differentiator": "Notably low scores for 'Compensation'",
            "icon": "📊",
            "Recognition Score": "3.0"
          },
          "0.0": {
            "segment": "What is your employment tenure? - 0.0",
            "NPS": "-14",
            "CES": "50.5%",
            "CSAT": "3.7/5",
            "Segment size": "23.1%",
            "key_differentiator": "Notably low scores for 'Training Opportunities'",
            "icon": "📊",
            "Recognition Score": "3.1"
          }
        },
        "Work-Life Balance": {
          "High Score": {
            "segment": "Work-Life Balance - High Score",
            "NPS": "-15",
            "CES": "54.6%",
            "CSAT": "3.8/5",
            "Segment size": "18.4%",
            "key_differentiator": "Notably high scores for 'Career Growth'",
            "icon": "📊",
            "Recognition Score": "3.2"
          },
          "Neutral Score": {
            "segment": "Work-Life Balance - Neutral Score",
            "NPS": "-15",
            "CES": "51.2%",
            "CSAT": "3.7/5",
            "Segment size": "37.2%",
            "key_differentiator": "Notably high scores for 'Benefits'",
            "icon": "📊",
            "Recognition Score": "3.1"
          }
        }
      },
      "segment_insights": [
        {
          "category": "Training Opportunities",
          "segment": "Top Performer: Training Opportunities - High Score",
          "insights": "This segment has the highest average satisfaction (3.9/5) and CES score (56.2%), indicating strong performance in training opportunities.",
          "action": "Leverage this segment's success by sharing best practices across other areas to improve overall training satisfaction.",
          "icon": "🏆"
        },
        {
          "category": "How satisfied are you with your current role?",
          "segment": "At Risk: How satisfied are you with your current role? - Very Dissatisfied",
          "insights": "This segment has the lowest average satisfaction (3.5/5) and CES score (45.7%), with low scores for 'Training Opportunities'.",
          "action": "Urgently address training opportunities and explore other factors contributing to dissatisfaction to prevent turnover.",
          "icon": "⚠️"
        }
      ]
    }
  ],
  "priority_issues": [
    {
      "title": "High Detractor Rate",
      "description": "42.9% of respondents are detractors in NPS.",
      "severity": "High",
      "percentage": "42.9%"
    },
    {
      "title": "High Effort Required",
      "description": "29.0% of respondents find the process difficult.",
      "severity": "Medium",
      "percentage": "29.0%"
    }
  ],
  "recommendations": [
    {
      "title": "Enhance Training Opportunities",
      "description": "Develop and implement a comprehensive training program to address the low satisfaction scores in training opportunities, targeting the 'Very Dissatisfied' segment. Measure improvement through satisfaction surveys and NPS scores. Aim to increase satisfaction by 10% within 6 months.",
      "priority": "High",
      "timeframe": "mid-term: 3-6 months"
    },
    {
      "title": "Improve Communication Strategies",
      "description": "Conduct workshops to improve team communication, focusing on the 'Very Ineffective' segment. Monitor progress through follow-up surveys and aim to reduce the 'Very Ineffective' responses by 20% within 6 months.",
      "priority": "Medium",
      "timeframe": "mid-term: 3-6 months"
    },
    {
      "title": "Review Compensation Packages",
      "description": "Conduct a market analysis to ensure competitive compensation packages, particularly for segments with low scores in compensation. Implement changes and measure impact through satisfaction surveys, aiming for a 15% increase in satisfaction within 6 months.",
      "priority": "High",
      "timeframe": "mid-term: 3-6 months"
    },
    {
      "title": "Leverage High-Performing Segments",
      "description": "Identify best practices from segments with high satisfaction in 'Training Opportunities' and 'Work Environment' and replicate these strategies across other segments. Aim to increase overall satisfaction by 5% within 3 months.",
      "priority": "Medium",
      "timeframe": "quick win: 1-3 months"
    },
    {
      "title": "Strengthen Management Support",
      "description": "Enhance management training programs to improve support, focusing on the 'Neutral' segment in management support. Track improvements through satisfaction surveys and aim for a 10% increase in satisfaction within 6 months.",
      "priority": "Medium",
      "timeframe": "mid-term: 3-6 months"
    }
  ],
  "action_plan": {
    "quick_wins": [
      {
        "title": "Overall satisfaction is strongly correlated with ease of meeting needs (R²=0.4623).",
        "description": "Conduct a review of processes and resources to identify and address barriers to meeting employee needs by Q2 2024.",
        "timeframe": "0-3 months",
        "priority": "High",
        "expected_impact": "High"
      },
      {
        "title": "Segments with low scores in 'Training Opportunities' and 'Compensation' show lower satisfaction and CES scores.",
        "description": "Prioritize improvements in training and compensation packages for low-scoring segments by Q2 2024.",
        "timeframe": "0-3 months",
        "priority": "High",
        "expected_impact": "High"
      }
    ],
    "long_term_actions": [
      {
        "title": "Compensation, training opportunities, and work-life balance are significantly influenced by employment tenure.",
        "description": "Develop tailored strategies to address compensation, training, and work-life balance needs for different tenure groups by Q3 2024.",
        "timeframe": "3-12 months",
        "priority": "Medium",
        "expected_impact": "Medium"
      },
      {
        "title": "NPS score is neutral at 0, indicating a balance between promoters and detractors.",
        "description": "Implement targeted engagement initiatives to convert passive employees into promoters by Q4 2024.",
        "timeframe": "3-12 months",
        "priority": "Medium",
        "expected_impact": "Medium"
      }
    ]
  },
  "customer_quotes": [
    {
      "text": "Processes are slow and outdated tools add to frustration.",
      "author": "Customer 1",
      "sentiment": "neutral"
    },
    {
      "text": "Better onboarding docs and realistic timelines are needed.",
      "author": "Customer 2",
      "sentiment": "neutral"
    },
    {
      "text": "Pilot wellness initiatives like no-meeting days.",
      "author": "Customer 3",
      "sentiment": "neutral"
    }
  ],
  "key_insights": [
    {
      "title": "Overall satisfaction is strongly correlated with ease of meeting needs (R²=0.4623).",
      "description": "Improving the ease with which employees can meet their needs could significantly enhance overall satisfaction.",
      "color": "#3498db",
      "category": "High"
    },
    {
      "title": "Segments with low scores in 'Training Opportunities' and 'Compensation' show lower satisfaction and CES scores.",
      "description": "These areas are critical to address to prevent dissatisfaction and potential turnover.",
      "color": "#27ae60",
      "category": "High"
    },
    {
      "title": "High satisfaction in segments with strong 'Training Opportunities' and 'Work Environment'.",
      "description": "These areas are strengths that can be leveraged to improve other aspects of employee experience.",
      "color": "#e74c3c",
      "category": "High"
    },
    {
      "title": "Very dissatisfied segment in current role has low satisfaction and CES scores, with low scores for 'Training Opportunities'.",
      "description": "This segment is at risk of high turnover if not addressed.",
      "color": "#3498db",
      "category": "High"
    },
    {
      "title": "Very ineffective communication within teams correlates with low satisfaction and CES scores.",
      "description": "Poor communication is a significant barrier to employee satisfaction and effectiveness.",
      "color": "#27ae60",
      "category": "High"
    },
    {
      "title": "Compensation, training opportunities, and work-life balance are significantly influenced by employment tenure.",
      "description": "Longer-tenured employees may have differing expectations and satisfaction levels regarding these factors.",
      "color": "#e74c3c",
      "category": "Medium"
    },
    {
      "title": "NPS score is neutral at 0, indicating a balance between promoters and detractors.",
      "description": "There is an opportunity to convert passives into promoters to improve overall employee advocacy.",
      "color": "#3498db",
      "category": "Medium"
    },
    {
      "title": "Recognition has a mean score of 3.08/5, with a significant portion rating it as 'excellent' or 'good'.",
      "description": "While recognition is generally positive, there is room for improvement to enhance employee satisfaction.",
      "color": "#27ae60",
      "category": "Medium"
    },
    {
      "title": "Neutral work-life balance segment shows potential for improvement through strong benefits.",
      "description": "Leveraging benefits could enhance work-life balance satisfaction and retention.",
      "color": "#e74c3c",
      "category": "Medium"
    },
    {
      "title": "Neutral management support segment has potential to improve satisfaction through career growth opportunities.",
      "description": "Strengthening management support could leverage career growth to boost satisfaction.",
      "color": "#3498db",
      "category": "Medium"
    }
  ]
};

const MetricCard = ({ metric }: { metric: any }) => (
  <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <div className="text-2xl">{metric.icon}</div>
          <h3 className="font-semibold text-gray-800 text-sm">{metric.title}</h3>
        </div>
        <div className="text-3xl font-bold mb-1" style={{ color: metric.color }}>
          {metric.value}
        </div>
        <p className="text-sm text-gray-600">{metric.subtitle}</p>
      </div>
    </div>
  </div>
);

const ProgressBar = ({ percentage, color, label, count }: { percentage: number; color: string; label: string; count?: string }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold" style={{ color }}>{percentage}%</span>
        {count && <span className="text-xs text-gray-500">({count})</span>}
      </div>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-3">
      <div 
        className="h-3 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${percentage}%`, backgroundColor: color }}
      ></div>
    </div>
  </div>
);

const PriorityIssueCard = ({ issue }: { issue: any }) => (
  <div className={`bg-white rounded-xl p-6 border-l-4 shadow-lg ${
    issue.severity === 'High' ? 'border-red-500' : 'border-orange-500'
  }`}>
    <div className="flex items-start gap-4">
      <AlertTriangle className={`w-6 h-6 ${
        issue.severity === 'High' ? 'text-red-500' : 'text-orange-500'
      }`} />
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800 mb-2">{issue.title}</h3>
        <p className="text-gray-600 text-sm mb-3">{issue.description}</p>
        <div className="flex items-center gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            issue.severity === 'High' 
              ? 'bg-red-100 text-red-800' 
              : 'bg-orange-100 text-orange-800'
          }`}>
            {issue.severity} Priority
          </span>
          <span className="text-sm font-semibold text-gray-700">{issue.percentage}</span>
        </div>
      </div>
    </div>
  </div>
);

const RecommendationCard = ({ recommendation }: { recommendation: any }) => (
  <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
    <div className="flex items-start gap-4">
      <Target className="w-6 h-6 text-blue-500 mt-1" />
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-3">
          <h3 className="font-semibold text-gray-800">{recommendation.title}</h3>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            recommendation.priority === 'High' 
              ? 'bg-red-100 text-red-800' 
              : 'bg-orange-100 text-orange-800'
          }`}>
            {recommendation.priority}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{recommendation.description}</p>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Clock className="w-4 h-4" />
          <span>{recommendation.timeframe}</span>
        </div>
      </div>
    </div>
  </div>
);

const InsightCard = ({ insight }: { insight: any }) => (
  <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
    <div className="flex items-start gap-4">
      <div className="w-3 h-3 rounded-full mt-2" style={{ backgroundColor: insight.color }}></div>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-3">
          <h3 className="font-semibold text-gray-800">{insight.title}</h3>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            insight.category === 'High' 
              ? 'bg-red-100 text-red-800' 
              : 'bg-yellow-100 text-yellow-800'
          }`}>
            {insight.category}
          </span>
        </div>
        <p className="text-gray-600 text-sm">{insight.description}</p>
      </div>
    </div>
  </div>
);

const DriverCard = ({ driver }: { driver: any }) => (
  <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
    <div className="flex items-start justify-between mb-4">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            driver.target_metric === 'NPS' ? 'bg-blue-100 text-blue-800' :
            driver.target_metric === 'CSAT' ? 'bg-green-100 text-green-800' :
            driver.target_metric === 'CES' ? 'bg-orange-100 text-orange-800' :
            'bg-purple-100 text-purple-800'
          }`}>
            {driver.target_metric}
          </span>
          <span className="text-sm font-semibold text-gray-700">{(parseFloat(driver.correlation) * 100).toFixed(1)}%</span>
        </div>
        <h3 className="font-semibold text-gray-800 text-sm mb-2">{driver.name}</h3>
        <p className="text-gray-600 text-xs">{driver.description}</p>
      </div>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div 
        className={`h-2 rounded-full transition-all duration-500 ease-out ${
          driver.target_metric === 'NPS' ? 'bg-blue-500' :
          driver.target_metric === 'CSAT' ? 'bg-green-500' :
          driver.target_metric === 'CES' ? 'bg-orange-500' :
          'bg-purple-500'
        }`}
        style={{ width: `${parseFloat(driver.correlation) * 100}%` }}
      ></div>
    </div>
  </div>
);

const DemographicSegmentCard = ({ segment, questionText }: { segment: any; questionText: string }) => (
  <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
    <div className="flex items-center justify-between mb-4">
      <h3 className="font-semibold text-gray-800">{segment.segment}</h3>
      <span className="text-sm text-gray-500">{segment.respondent_count.toLocaleString()} responses</span>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <p className="text-xs text-gray-500 mb-1">Satisfaction</p>
        <p className="font-semibold text-gray-800">{segment.avg_satisfaction}</p>
      </div>
      <div>
        <p className="text-xs text-gray-500 mb-1">NPS</p>
        <p className={`font-semibold ${parseInt(segment.nps) >= 0 ? 'text-green-600' : 'text-red-600'}`}>{segment.nps}</p>
      </div>
      <div>
        <p className="text-xs text-gray-500 mb-1">CES Score</p>
        <p className="font-semibold text-gray-800">{segment.ces_score}</p>
      </div>
      <div>
        <p className="text-xs text-gray-500 mb-1">Recognition</p>
        <p className="font-semibold text-gray-800">{segment.custom_recognition_score}</p>
      </div>
    </div>
  </div>
);

const ActionPlanCard = ({ action, type }: { action: any; type: 'quick' | 'long' }) => (
  <div className={`bg-white rounded-xl shadow-lg border-l-4 p-6 ${
    type === 'quick' ? 'border-green-500' : 'border-blue-500'
  }`}>
    <div className="flex items-start gap-4">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
        type === 'quick' ? 'bg-green-100' : 'bg-blue-100'
      }`}>
        {type === 'quick' ? <Zap className="w-4 h-4 text-green-600" /> : <Target className="w-4 h-4 text-blue-600" />}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-3">
          <h3 className="font-semibold text-gray-800">{action.title}</h3>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            action.priority === 'High' 
              ? 'bg-red-100 text-red-800' 
              : 'bg-orange-100 text-orange-800'
          }`}>
            {action.priority}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{action.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            <span>{action.timeframe}</span>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            action.expected_impact === 'High' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-yellow-100 text-yellow-800'
          }`}>
            {action.expected_impact} Impact
          </span>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Employee Engagement Dashboard</h1>
              <p className="text-gray-600 mt-2">{surveyData.survey_metadata.report_period}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Generated on</p>
              <p className="font-semibold">{new Date(surveyData.survey_metadata.generation_date).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', name: 'Overview', icon: BarChart3 },
              { id: 'breakdowns', name: 'Score Breakdowns', icon: PieChart },
              { id: 'drivers', name: 'Key Drivers', icon: TrendingUp },
              { id: 'demographics', name: 'Demographics', icon: Users },
              { id: 'segments', name: 'Segment Analysis', icon: Filter },
              { id: 'insights', name: 'AI Insights', icon: Brain },
              { id: 'actions', name: 'Action Plan', icon: Target }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Key Metrics Grid */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Performance Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {surveyData.key_metrics.map((metric, index) => (
                  <MetricCard key={index} metric={metric} />
                ))}
              </div>
            </div>

            {/* Priority Issues */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Priority Issues</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {surveyData.priority_issues.map((issue, index) => (
                  <PriorityIssueCard key={index} issue={issue} />
                ))}
              </div>
            </div>

            {/* Employee Feedback */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-purple-500" />
                Employee Feedback
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {surveyData.customer_quotes.map((quote, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700 italic mb-3">"{quote.text}"</p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500">— {quote.author}</p>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        quote.sentiment === 'positive' ? 'bg-green-100 text-green-800' :
                        quote.sentiment === 'negative' ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {quote.sentiment}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'breakdowns' && (
          <div className="space-y-8">
            {/* NPS Breakdown */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-blue-500" />
                Net Promoter Score Breakdown
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <ProgressBar 
                    percentage={parseFloat(surveyData.nps_breakdown.promoters.percentage)} 
                    color="#22c55e" 
                    label="Promoters"
                    count={surveyData.nps_breakdown.promoters.count}
                  />
                  <ProgressBar 
                    percentage={parseFloat(surveyData.nps_breakdown.passives.percentage)} 
                    color="#f59e0b" 
                    label="Passives"
                    count={surveyData.nps_breakdown.passives.count}
                  />
                  <ProgressBar 
                    percentage={parseFloat(surveyData.nps_breakdown.detractors.percentage)} 
                    color="#ef4444" 
                    label="Detractors"
                    count={surveyData.nps_breakdown.detractors.count}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-500 mb-2">
                      {surveyData.nps_breakdown.overall_score}
                    </div>
                    <p className="text-gray-600">Overall NPS Score</p>
                    <div className="flex items-center justify-center mt-2 text-red-500">
                      <ArrowDown className="w-4 h-4" />
                      <span className="text-sm ml-1">Needs Improvement</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ESAT Breakdown */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Star className="w-6 h-6 text-green-500" />
                Employee Satisfaction (ESAT) Breakdown
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <ProgressBar 
                    percentage={parseFloat(surveyData.csat_esat_breakdown.very_satisfied.percentage)} 
                    color="#22c55e" 
                    label="Very Satisfied"
                    count={surveyData.csat_esat_breakdown.very_satisfied.count}
                  />
                  <ProgressBar 
                    percentage={parseFloat(surveyData.csat_esat_breakdown.satisfied.percentage)} 
                    color="#65a30d" 
                    label="Satisfied"
                    count={surveyData.csat_esat_breakdown.satisfied.count}
                  />
                  <ProgressBar 
                    percentage={parseFloat(surveyData.csat_esat_breakdown.neutral.percentage)} 
                    color="#f59e0b" 
                    label="Neutral"
                    count={surveyData.csat_esat_breakdown.neutral.count}
                  />
                  <ProgressBar 
                    percentage={parseFloat(surveyData.csat_esat_breakdown.dissatisfied.percentage)} 
                    color="#f97316" 
                    label="Dissatisfied"
                    count={surveyData.csat_esat_breakdown.dissatisfied.count}
                  />
                  <ProgressBar 
                    percentage={parseFloat(surveyData.csat_esat_breakdown.very_dissatisfied.percentage)} 
                    color="#ef4444" 
                    label="Very Dissatisfied"
                    count={surveyData.csat_esat_breakdown.very_dissatisfied.count}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-500 mb-2">
                      {surveyData.csat_esat_breakdown.overall_score}%
                    </div>
                    <p className="text-gray-600">Overall Satisfaction</p>
                    <div className="flex items-center justify-center mt-2 text-green-500">
                      <ArrowUp className="w-4 h-4" />
                      <span className="text-sm ml-1">Above Average</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* EES Breakdown */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Zap className="w-6 h-6 text-orange-500" />
                Employee Effort Score (EES) Breakdown
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <ProgressBar 
                    percentage={parseFloat(surveyData.ces_ees_breakdown.easy.percentage)} 
                    color="#22c55e" 
                    label="Easy"
                    count={surveyData.ces_ees_breakdown.easy.count}
                  />
                  <ProgressBar 
                    percentage={parseFloat(surveyData.ces_ees_breakdown.neutral.percentage)} 
                    color="#f59e0b" 
                    label="Neutral"
                    count={surveyData.ces_ees_breakdown.neutral.count}
                  />
                  <ProgressBar 
                    percentage={parseFloat(surveyData.ces_ees_breakdown.difficult.percentage)} 
                    color="#ef4444" 
                    label="Difficult"
                    count={surveyData.ces_ees_breakdown.difficult.count}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-500 mb-2">
                      {surveyData.ces_ees_breakdown.overall_score}%
                    </div>
                    <p className="text-gray-600">Overall EES Score</p>
                    <div className="flex items-center justify-center mt-2 text-orange-500">
                      <Activity className="w-4 h-4" />
                      <span className="text-sm ml-1">Room for Improvement</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recognition Breakdown */}
            {surveyData.custom_metric_breakdown.map((metric, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Award className="w-6 h-6 text-purple-500" />
                  {metric.metric_name} Breakdown
                </h2>
                <p className="text-gray-600 mb-6">{metric.metric_description}</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    {metric.breakdown.map((item, itemIndex) => (
                      <ProgressBar 
                        key={itemIndex}
                        percentage={parseFloat(item.percentage)} 
                        color={`hsl(${(parseInt(item.value) - 1) * 60}, 70%, 50%)`}
                        label={`${item.label} (${item.value}/5)`}
                        count={item.count}
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-500 mb-2">
                        {metric.overall_score}/5
                      </div>
                      <p className="text-gray-600">Average {metric.metric_name} Score</p>
                      <p className="text-sm text-gray-500 mt-2">{metric.scale_type}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'drivers' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Performance Drivers</h2>
              <p className="text-gray-600 mb-8">Understanding which factors have the strongest correlation with key metrics helps prioritize improvement efforts.</p>
              
              {/* Group drivers by target metric */}
              {['NPS', 'CSAT', 'CES', 'RECOGNITION'].map(metric => {
                const metricDrivers = surveyData.drivers.filter(driver => driver.target_metric === metric);
                if (metricDrivers.length === 0) return null;
                
                return (
                  <div key={metric} className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        metric === 'NPS' ? 'bg-blue-100 text-blue-800' :
                        metric === 'CSAT' ? 'bg-green-100 text-green-800' :
                        metric === 'CES' ? 'bg-orange-100 text-orange-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {metric}
                      </span>
                      Drivers
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {metricDrivers.map((driver, index) => (
                        <DriverCard key={index} driver={driver} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'demographics' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Demographic Analysis</h2>
              <p className="text-gray-600 mb-8">Performance breakdown across different employee segments to identify patterns and opportunities.</p>
              
              {Object.entries(surveyData.demographics.segments_by_demographic).map(([questionId, data]: [string, any]) => (
                <div key={questionId} className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{data.question_text}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.segments.map((segment: any, index: number) => (
                      <DemographicSegmentCard key={index} segment={segment} questionText={data.question_text} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Notable Differences */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Eye className="w-6 h-6 text-indigo-500" />
                Notable Segment Insights
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Top Positive Segments */}
                <div>
                  <h3 className="text-lg font-semibold text-green-700 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Top Performers
                  </h3>
                  <div className="space-y-4">
                    {surveyData.demographics.notable_differences.top_positive_segments.map((segment, index) => (
                      <div key={index} className="bg-green-50 rounded-lg p-4 border border-green-200">
                        <h4 className="font-semibold text-green-800 mb-2">{segment.segment}</h4>
                        <p className="text-sm text-green-700 mb-2">{segment.category}</p>
                        <p className="text-xs text-green-600 mb-3">{segment.insight}</p>
                        <p className="text-xs text-green-800 font-medium">{segment.action}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* At Risk Segments */}
                <div>
                  <h3 className="text-lg font-semibold text-red-700 mb-4 flex items-center gap-2">
                    <XCircle className="w-5 h-5" />
                    At Risk
                  </h3>
                  <div className="space-y-4">
                    {surveyData.demographics.notable_differences.at_risk_segments.map((segment, index) => (
                      <div key={index} className="bg-red-50 rounded-lg p-4 border border-red-200">
                        <h4 className="font-semibold text-red-800 mb-2">{segment.segment}</h4>
                        <p className="text-sm text-red-700 mb-2">{segment.category}</p>
                        <p className="text-xs text-red-600 mb-3">{segment.insight}</p>
                        <p className="text-xs text-red-800 font-medium">{segment.action}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Opportunity Segments */}
                <div>
                  <h3 className="text-lg font-semibold text-orange-700 mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Opportunities
                  </h3>
                  <div className="space-y-4">
                    {surveyData.demographics.notable_differences.opportunity_segments.map((segment, index) => (
                      <div key={index} className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                        <h4 className="font-semibold text-orange-800 mb-2">{segment.segment}</h4>
                        <p className="text-sm text-orange-700 mb-2">{segment.category}</p>
                        <p className="text-xs text-orange-600 mb-3">{segment.insight}</p>
                        <p className="text-xs text-orange-800 font-medium">{segment.action}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'segments' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Segment Performance Analysis</h2>
              <p className="text-gray-600 mb-8">Detailed analysis of performance across different employee segments and question responses.</p>
              
              {/* Segment Insights */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Segment Insights</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {surveyData.segment_performance[0].segment_insights.map((insight, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                      <div className="flex items-start gap-4">
                        <div className="text-2xl">{insight.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h4 className="font-semibold text-gray-800">{insight.category}</h4>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              insight.segment.includes('Top Performer') ? 'bg-green-100 text-green-800' :
                              insight.segment.includes('At Risk') ? 'bg-red-100 text-red-800' :
                              'bg-orange-100 text-orange-800'
                            }`}>
                              {insight.segment.split(':')[0]}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm mb-3">{insight.insights}</p>
                          <p className="text-gray-800 text-sm font-medium">{insight.action}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Question Level Performance */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Question-Level Performance</h3>
                {Object.entries(surveyData.segment_performance[0].question_level).map(([question, segments]: [string, any]) => (
                  <div key={question} className="mb-8 bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">{question}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {Object.entries(segments).map(([segmentKey, segmentData]: [string, any]) => (
                        <div key={segmentKey} className="bg-gray-50 rounded-lg p-4">
                          <h5 className="font-semibold text-gray-800 mb-3">{segmentKey}</h5>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">NPS:</span>
                              <span className={`font-medium ${parseInt(segmentData.NPS) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {segmentData.NPS}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">CES:</span>
                              <span className="font-medium text-gray-800">{segmentData.CES}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">CSAT:</span>
                              <span className="font-medium text-gray-800">{segmentData.CSAT}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Recognition:</span>
                              <span className="font-medium text-gray-800">{segmentData['Recognition Score']}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Size:</span>
                              <span className="font-medium text-gray-800">{segmentData['Segment size']}</span>
                            </div>
                          </div>
                          <div className="mt-3 pt-3 border-t border-gray-200">
                            <p className="text-xs text-gray-600">{segmentData.key_differentiator}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'insights' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">AI-Powered Insights</h2>
              <div className="space-y-6">
                {surveyData.key_insights.map((insight, index) => (
                  <InsightCard key={index} insight={insight} />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'actions' && (
          <div className="space-y-8">
            {/* Recommendations */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Strategic Recommendations</h2>
              <div className="space-y-6">
                {surveyData.recommendations.map((recommendation, index) => (
                  <RecommendationCard key={index} recommendation={recommendation} />
                ))}
              </div>
            </div>

            {/* Action Plan */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Action Plan</h2>
              
              {/* Quick Wins */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-green-500" />
                  Quick Wins (0-3 months)
                </h3>
                <div className="space-y-6">
                  {surveyData.action_plan.quick_wins.map((action, index) => (
                    <ActionPlanCard key={index} action={action} type="quick" />
                  ))}
                </div>
              </div>

              {/* Long-term Actions */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-500" />
                  Long-term Actions (3-12 months)
                </h3>
                <div className="space-y-6">
                  {surveyData.action_plan.long_term_actions.map((action, index) => (
                    <ActionPlanCard key={index} action={action} type="long" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;